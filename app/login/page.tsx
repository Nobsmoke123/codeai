import AuthenticationNav from "@/components/ui/AuthenticationNav";
import LoginForm from "@/components/layouts/LoginForm";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";

const LoginPage = async () => {
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
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
