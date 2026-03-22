import { getServerSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod.js";
import * as z from "zod";
import { prisma } from "@/lib/auth";
import {
  ExplanationComplexity,
  ExplanationStatus,
} from "@/utils/generated/prisma/enums";
import { createCodeHash, logResponse } from "@/utils/helpers";


export async function POST(req: NextRequest) {
  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized", status: 401 });
  }

  const body = await req.json();

  const { code }: { code: string } = body;

  const hash = createCodeHash(code);

  const existingCode = await prisma.explanation.findFirst({
    where: {
      user_id: session.user.id,
      code_hash: hash,
    },
  });

  // Idempotency check
  if (existingCode) {
    return NextResponse.json({
      success: true,
      id: existingCode.id.toString(), // for serialization of BigInt
      status: 201,
    });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const stepSchema = z.object({
    step_number: z.number(),
    line_start: z.number(),
    line_end: z.number(),
    explanation: z.string(),
  });

  // The structured schema
  const explanationSchema = z.object({
    title: z.string(),
    language: z.string(),
    complexity: z.enum(["low", "medium", "high"]),
    summary: z.string(),
    longSummary: z.string(),
    optimization_tip: z.string().nullable(),
    performance_impact: z.string().nullable(),
    model: z.string(),
    steps: z.array(stepSchema),
  });

  try {
    // Call OpenAI
    const response = await openai.responses.parse({
      model: "gpt-4o-2024-11-20",
      input: [
        {
          role: "developer",
          content: [
            {
              type: "input_text",
              text: `
You are CodeAI, a code explanation engine.
Return only structured data matching the provided schema.

Rules:
- Detect the likely programming language.
- Generate a concise title.
- Complexity must be one of: low, medium, high.
- Write a short summary and a long summary.
- Provide one practical optimization tip if relevant, otherwise null.
- Provide performance impact summary. Use "Negligible" if there is no meaningful impact.
- Break the explanation into step-by-step items by line or line range.
- Do not invent missing context.
- Keep explanations clear and concise.
    `.trim(),
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Explain this code. \n\n\n ${code}`,
            },
          ],
        },
      ],
      text: {
        format: zodTextFormat(explanationSchema, "explanation"),
      },
    });

    if (!response.output_parsed) {
      throw new Error("Error generating explanation");
    }

    const explanation = response.output_parsed!;

    const [explanation_output, _] = await Promise.all([
      prisma.explanation.create({
        data: {
          user_id: session.user.id,
          code,
          complexity:
            explanation.complexity.toUpperCase() as ExplanationComplexity,
          language: explanation.language!,
          longSummary: explanation.longSummary,
          model: response.model,
          performance_impact: explanation.performance_impact!,
          optimization_tip: explanation.optimization_tip ?? "Negligible",
          raw_response_json: explanation,
          summary: explanation.summary,
          title: explanation.title,
          prompt_tokens: response.usage?.input_tokens,
          code_hash: hash,
          completion_tokens: response.usage?.output_tokens,
          total_tokens: response.usage?.total_tokens,
          status: response.status?.toUpperCase() as ExplanationStatus,
          explanation_steps: {
            createMany: {
              data: explanation.steps.map((step) => ({
                step_number: step.step_number,
                line_start: step.line_start,
                line_end: step.line_end,
                text: step.explanation,
              })),
            },
          },
        },
      }),
      logResponse(JSON.stringify(response)),
    ]);

    return NextResponse.json({
      success: true,
      id: explanation_output.id.toString(), // for serialization of BigInt
      status: 201,
    });
  } catch (error) {
    console.log("The error is: ", error);
    return NextResponse.json({
      error: "Error generating code explanation.",
      status: 400,
    });
  }
}
