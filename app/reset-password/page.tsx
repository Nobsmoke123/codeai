import type { Metadata } from "next";
import AuthShell from "@/components/layouts/AuthShell";
import ResetPasswordForm from "@/components/layouts/ResetPasswordForm";
import { createNoIndexMetadata } from "@/lib/seo";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = createNoIndexMetadata(
  "Reset Password",
  "Reset your CodeAI password and regain access to your account.",
);

const ResetPasswordPage = async () => {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <AuthShell>
      <ResetPasswordForm />
    </AuthShell>
  );
};

export default ResetPasswordPage;
