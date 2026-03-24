import type { Metadata } from "next";
import AuthShell from "@/components/layouts/AuthShell";
import ForgotPasswordForm from "@/components/layouts/ForgotPasswordForm";
import { createNoIndexMetadata } from "@/lib/seo";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = createNoIndexMetadata(
  "Forgot Password",
  "Request a password reset link for your CodeAI account.",
);

const ForgotPasswordPage = async () => {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <AuthShell>
      <ForgotPasswordForm />
    </AuthShell>
  );
};

export default ForgotPasswordPage;
