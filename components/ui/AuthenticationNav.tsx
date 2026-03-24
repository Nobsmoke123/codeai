import Link from "next/link";
import { BiTerminal } from "react-icons/bi";
import ThemeToggle from "./ThemeToggle";

const AuthenticationNav = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-nav-border bg-nav-surface shadow-[0_12px_40px_-28px_rgba(15,23,42,0.5)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <div className="bg-[#135BEC] p-0.5 rounded-sm">
                <BiTerminal className="text-white size-6" />
              </div>
              <span className="font-black tracking-tight text-[#135BEC] text-xl uppercase tracking-widest">
                CodeAI
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link
            href="/privacy"
            className="transition hover:text-slate-950 dark:hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="transition hover:text-slate-950 dark:hover:text-white"
          >
            Terms
          </Link>
          <ThemeToggle compact />
        </div>
      </div>
    </header>
  );
};

export default AuthenticationNav;
