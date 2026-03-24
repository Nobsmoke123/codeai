"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BiTerminal } from "react-icons/bi";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const { data: session, isPending } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    { href: "/explainer", label: "Explainer" },
    { href: "/history", label: "History" },
    { href: "/settings", label: "Settings" },
  ];

  // Top Navigation
  return (
    <header className="sticky top-0 z-50 w-full max-w-5xl mx-auto rounded-[28px] border border-nav-border bg-nav-surface shadow-[0_20px_60px_-40px_rgba(15,23,42,0.55)] backdrop-blur-xl">
      <div className="flex flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-3">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <div className="bg-custom-primary p-0.5 rounded-sm">
                <BiTerminal className="text-white size-6" />
              </div>
              <span className="font-bold tracking-tight text-slate-900 dark:text-white">
                CodeAI
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle compact />
            {!isPending && session?.user ? (
              <button
                type="button"
                onClick={async () => {
                  try {
                    setIsLoading(true);
                    await signOut();
                    toast.success("Log out successfully.");
                    router.replace("/");
                  } catch (error) {
                    console.log(error);
                  } finally {
                    setIsLoading(false);
                  }
                }}
                className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white transition hover:bg-primary/90"
              >
                {!isLoading ? "Sign Out" : <BeatLoader size={6} color="#fff" />}
              </button>
            ) : (
              <Link
                href={"/login"}
                className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-2 text-xs font-semibold text-black dark:text-white transition hover:bg-primary/90"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        {!isPending && session?.user ? (
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
            <nav className="flex flex-wrap items-center gap-2">
              {links.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    className={clsx(
                      "rounded-full px-3 py-2 text-sm font-medium transition",
                      active
                        ? "bg-primary text-black dark:text-white shadow-lg shadow-primary/20"
                        : "text-slate-600 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white",
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={async () => {
                  try {
                    setIsLoading(true);
                    await signOut();
                    toast.success("Log out successfully.");
                    router.replace("/");
                  } catch (error) {
                    console.log(error);
                  } finally {
                    setIsLoading(false);
                  }
                }}
                className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black dark:text-white transition hover:bg-primary/90"
              >
                {!isLoading ? "Sign Out" : <BeatLoader size={8} color="#fff" />}
              </button>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link
              href={"/login"}
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black dark:text-white transition hover:bg-primary/90"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
