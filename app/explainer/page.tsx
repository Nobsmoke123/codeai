import ExplainerClient from "@/components/ui/ExplainerClient";
import Navigation from "@/components/ui/Navigation";
import { prisma } from "@/lib/auth";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";

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
    <div className="flex min-h-screen items-center justify-center bg-background-dark font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between pt-6 px-6 bg-white dark:bg-black sm:items-start">
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
