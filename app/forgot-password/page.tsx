import AuthenticationNav from "@/components/ui/AuthenticationNav";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiTerminal } from "react-icons/bi";
import {
  BsArrowRight,
  BsChevronLeft,
  BsEnvelopeFill,
  BsUnlockFill,
} from "react-icons/bs";

const ForgotPasswordPage = () => {
  const { data: session, isPending, error, refetch } = useSession();
  const router = useRouter();

  if (session?.user) {
    router.replace("/");
  }
  
  return (
    <div>
      <AuthenticationNav />

      <main className="flex-grow flex items-center justify-center pt-16 px-6 relative overflow-hidden mt-8">
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#135bec]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="w-full max-w-md relative z-10">
          <div className="bg-[#11131b]/40 backdrop-blur-xl border border-[#1e293b]/50 p-8 rounded-xl ">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#135bec]/10 border border-[#135bec]/30 mb-6">
                <BsUnlockFill className="text-[#135bec] text-3xl" />
              </div>
              <h1 className="text-[2.25rem] font-black leading-none tracking-tighter mb-4 text-[#ffffff]">
                Forgot Password
              </h1>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Enter your email address to receive a password reset link.
              </p>
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94a3b8] block ml-1">
                  Email
                </label>
                <div className="relative group">
                  <BsEnvelopeFill className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8] text-xl transition-colors group-focus-within:text-primary" />
                  <input
                    className="w-full bg-[#191b24] border border-[#1e293b] focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-4 pl-12 pr-4 text-[#ffffff] placeholder:text-slate-600 transition-all outline-none"
                    placeholder="johndoe@gmail.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <button
                className="w-full bg-[#135bec] text-[#ffffff] font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(19,91,236,0.25)] hover:bg-[#135bec]/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                type="submit"
              >
                <span>Send Reset Link</span>
                <BsArrowRight className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-[#1e293b]/30 text-center">
              <Link
                href={"/login"}
                className="text-sm font-semibold text-on-surface-variant hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <BsChevronLeft className="material-symbols-outlined text-lg" />
                Back to Login
              </Link>
            </div>
          </div>
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
