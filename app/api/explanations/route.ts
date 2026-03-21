import { getServerSession } from "@/lib/session";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod.js";
import * as z from "zod";

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized", status: 401 });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // The structured schema
  const schema = z.object({
    title: z.string(),
    language: z.string(),
    complexity: z.enum(["low", "medium", "high"]),
    summary: z.string(),
    optimization_tip: z.string(),
    performance_impact: z.string(),
  });

  const body = await req.json();

  const { code } = body;

  // Call OpenAI
}
