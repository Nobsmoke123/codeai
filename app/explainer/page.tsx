import type { Metadata } from "next";
import ExplainerClient from "@/components/ui/ExplainerClient";
import Navigation from "@/components/ui/Navigation";
import { prisma } from "@/lib/auth";
import { createNoIndexMetadata } from "@/lib/seo";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = createNoIndexMetadata(
  "Explainer",
  "Paste code into CodeAI and generate a private, structured explanation tailored to your snippet.",
);

const EditorPage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login");
  } else {
    await prisma.profile.upsert({
      where: {
        user_id: session.user.id,
      },
      update: {
        email: session.user.email,
        avatar_url: session.user.image!,
        full_name: session.user.name,
        last_login_at: new Date(),
      },
      create: {
        // user_id: session.user.id,
        email: session.user.email,
        avatar_url: session.user.image!,
        full_name: session.user.name,
        last_login_at: new Date(),
        user: {
          connect: { id: session.user.id },
        },
      },
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-page-shell via-white to-slate-100 font-sans dark:from-background-dark dark:via-black dark:to-slate-950">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between px-4 pb-6 pt-6 sm:items-start sm:px-6">
        <Navigation />
        <ExplainerClient />
        {/* Abstract Gradient Background Elements (Subtle) */}
        <div className="fixed -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="fixed top-1/2 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
      </main>
    </div>
  );
};

export default EditorPage;
