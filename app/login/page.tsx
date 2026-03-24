import type { Metadata } from "next";
import AuthShell from "@/components/layouts/AuthShell";
import LoginForm from "@/components/layouts/LoginForm";
import { createNoIndexMetadata } from "@/lib/seo";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = createNoIndexMetadata(
  "Login",
  "Sign in to CodeAI to generate AI-powered code explanations and access your saved history.",
);

const LoginPage = async () => {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <AuthShell>
      <LoginForm />
    </AuthShell>
  );
};

export default LoginPage;
