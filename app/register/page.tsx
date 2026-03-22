import RegisterForm from "@/components/layouts/RegisterForm";
import AuthenticationNav from "@/components/ui/AuthenticationNav";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div>
      <AuthenticationNav />

      <main className="flex-grow flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#c084fc]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="w-full max-w-md max-w-[420px] relative z-10">
          <RegisterForm />
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

export default RegisterPage;
