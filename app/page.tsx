"use client";

import Features from "@/components/layouts/Features";
import Hero from "@/components/layouts/Hero";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { BiTerminal } from "react-icons/bi";
import { BsCodeSlash, BsTencentQq, BsTerminal, BsUbuntu } from "react-icons/bs";
import { MdHub } from "react-icons/md";

export default function Home() {
  const { data: session, isPending, error, refetch } = useSession();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-dark font-sans dark:bg-black">
      <main className="flex min-h-screen max-w-5xl flex-col items-center justify-between pt-6 px-4 bg-white dark:bg-black sm:items-start">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between max-w-5xl w-full mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-custom-primary p-0.5 rounded-sm">
              <BiTerminal className="text-white size-6" />
            </div>
            <span className="font-bold text-lg tracking-tight">CodeAI</span>
          </div>

          <div className="flex items-center gap-4">
            {session?.user ? (
              <>
                <Link
                  href={"/explainer"}
                  className="p-2 text-white rounded-md text-sm tracking-tight"
                >
                  Explainer
                </Link>

                <Link
                  href={"/history"}
                  className="p-2 text-white rounded-md text-sm tracking-tight"
                >
                  History
                </Link>

                <Link
                  href={"/settings"}
                  className="p-2 text-white rounded-md text-sm tracking-tight"
                >
                  Settings
                </Link>

                <Link
                  href={""}
                  onClick={() => signOut()}
                  className="p-2 bg-blue-600/30 text-white rounded-md text-sm tracking-tight"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <Link
                href={"/login"}
                className="p-2 bg-blue-600/30 text-white rounded-md text-sm tracking-tight"
              >
                Sign In
              </Link>
            )}
          </div>
        </nav>

        {/* Hero Content */}
        <Hero />

        <Features />

        {/* <!-- Social Proof --> */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 w-full opacity-60 flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-widest font-bold">
            Trusted by 10k+ Developers
          </p>
          <div className="flex gap-6 items-center">
            <MdHub className="text-2xl" />

            <BsUbuntu className="text-2xl" />

            <BsTencentQq className="text-2xl" />

            <BsCodeSlash className="text-2xl" />

            <BsTerminal className="text-2xl" />
          </div>
        </div>

        {/* <!-- iOS Home Indicator Spacing --> */}
        <div className="h-8 w-full"></div>
      </main>
    </div>
  );
}
