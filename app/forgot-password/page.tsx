import ForgotPasswordForm from "@/components/layouts/ForgotPasswordForm";
import AuthenticationNav from "@/components/ui/AuthenticationNav";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";

const ForgotPasswordPage = async () => {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div>
      <AuthenticationNav />

      <main className="flex-grow flex items-center justify-center pt-16 px-6 relative overflow-hidden mt-8">
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#135bec]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="w-full max-w-md relative z-10">
          <ForgotPasswordForm />
          <div className="mt-8 flex justify-between items-center opacity-30 px-2">
            <span className="text-[10px] font-mono tracking-tighter">
              v4.0.2-STABLE
            </span>
            <span className="text-[10px] font-mono tracking-tighter">
              SECURED_BY_AES256
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPasswordPage;
