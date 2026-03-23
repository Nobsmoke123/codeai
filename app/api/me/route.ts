import { prisma } from "@/lib/auth";
import { getServerSession } from "@/lib/session";
import { serializeJson } from "@/utils/helpers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized", status: 401 });
  }

  const user = session?.user!;

  const profile = await prisma.profile.findFirst({
    where: { user_id: user.id },
    select: {
      last_login_at: true,
    },
  });

  return NextResponse.json(serializeJson(profile));
}
