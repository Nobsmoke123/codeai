"use client";
import AuthenticationNav from "@/components/ui/AuthenticationNav";
import { signIn, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi";

const LoginPage = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && session?.user) {
      router.replace("/");
    }
  }, [isPending, session, router]);

  return (
    !isPending && (
      <div>
        <AuthenticationNav />

        <main className="flex-grow flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#c084fc]/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="w-full max-w-md max-w-[420px] relative z-10">
            <div className="glass-panel border border-white/5 rounded-xl p-8 shadow-2xl">
              <div className="mb-8">
                <h1 className="text-[36px] font-black leading-tight tracking-tight mb-2">
                  Welcome Back.
                </h1>
                <p className="text-[#94a3b8] text-sm font-medium">
                  Continue your development journey.
                </p>
              </div>
              <form action="#" className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black tracking-widest text-[#94a3b8] uppercase ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-[#191b24] border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary rounded-lg py-3 px-4 text-[#ffffff] placeholder:text-slate-600 transition-all outline-none"
                      placeholder="name@company.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="block text-[10px] font-black tracking-widest text-[#94a3b8] uppercase">
                      Password
                    </label>
                    <Link
                      href={"/forgot-password"}
                      className="text-[10px] font-black tracking-widest text-primary uppercase hover:opacity-80 transition-opacity"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full bg-[#191b24] border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary rounded-lg py-3 px-4 text-[#ffffff] placeholder:text-slate-600 transition-all outline-none"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                </div>
                <button
                  className="w-full bg-blue-500 text-white font-black py-4 rounded-lg shadow-[0_0_40px_-10px_rgba(19,91,236,0.3)] hover:opacity-90 active:scale-[0.98] transition-all tracking-widest uppercase text-sm"
                  type="submit"
                >
                  Login
                </button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-outline-variant/50"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#0b0d11] px-4 text-[#94a3b8] font-black tracking-widest">
                    Or Continue With
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Google button */}
                <button
                  onClick={() =>
                    signIn.social({
                      provider: "google",
                      callbackURL: "/explainer",
                    })
                  }
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#11131b] ring-1 ring-outline-variant hover:bg-[#191b24] transition-colors active:scale-95 group"
                >
                  <BiLogoGoogle className="" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-[#94a3b8]">
                    Google
                  </span>
                </button>

                {/* Github button */}
                <button
                  onClick={() =>
                    signIn.social({
                      provider: "github",
                      callbackURL: "/explainer",
                    })
                  }
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#11131b] ring-1 ring-outline-variant hover:bg-[#191b24] transition-colors active:scale-95 group"
                >
                  <BiLogoGithub className="" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-[#94a3b8]">
                    GitHub
                  </span>
                </button>
              </div>
              <div className="mt-10 text-center">
                <p className="text-[#94a3b8] text-[12px] font-medium">
                  Don't have an account? &nbsp;&nbsp;
                  <Link
                    href={"/register"}
                    className="text-[#135BEC] font-black ml-1 hover:underline decoration-2 underline-offset-4 uppercase tracking-widest"
                  >
                    Register
                  </Link>
                </p>
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
    )
  );
};

export default LoginPage;
