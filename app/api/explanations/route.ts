import { getServerSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized", status: 401 });
  }

  const body = await req.json();

  const { code } = body;

  // Call OpenAI
}
