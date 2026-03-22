import { getServerSession } from "@/lib/session";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/auth";

export async function GET(
  _req: Request,
  ctx: RouteContext<"/api/explanations/[id]">,
) {
  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized", status: 401 });
  }

  const { id: explanation_id } = await ctx.params;

  const existingCode = await prisma.explanation.findFirst({
    where: {
      user_id: session.user.id,
      id: BigInt(explanation_id),
    },
  });

  if (!existingCode) {
    return NextResponse.json({
      status: 404,
      error: "Explanation not found.",
    });
  }

  return NextResponse.json(existingCode);
}
