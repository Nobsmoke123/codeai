import type { Metadata } from "next";
import AuthShell from "@/components/layouts/AuthShell";
import RegisterForm from "@/components/layouts/RegisterForm";
import { createNoIndexMetadata } from "@/lib/seo";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = createNoIndexMetadata(
  "Register",
  "Create a CodeAI account to start generating clear, step-by-step AI explanations for code snippets.",
);

const RegisterPage = async () => {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <AuthShell>
      <RegisterForm />
    </AuthShell>
  );
};

export default RegisterPage;
