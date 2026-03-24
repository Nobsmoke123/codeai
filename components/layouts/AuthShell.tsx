import AuthenticationNav from "@/components/ui/AuthenticationNav";

const AuthShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-page-shell via-white to-slate-100 text-slate-900 dark:from-background-dark dark:via-black dark:to-slate-950 dark:text-slate-100">
      <AuthenticationNav />

      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-12 pt-24 sm:px-6">
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-60 dark:opacity-100" />
        <div className="absolute top-20 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[140px] pointer-events-none dark:bg-primary/10" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-300/20 blur-[120px] pointer-events-none dark:bg-sky-400/10" />

        <div className="relative z-10 w-full max-w-md">
          {children}

          <div className="mt-8 flex items-center justify-between px-2 text-[10px] font-mono tracking-tighter text-slate-400 dark:text-slate-500">
            <span>v4.0.2-STABLE</span>
            <span>SECURED_BY_AES256</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthShell;
