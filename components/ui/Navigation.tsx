"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiTerminal } from "react-icons/bi";
import { toast } from "react-toastify";

const Navigation = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  // Top Navigation
  return (
    <header className="w-full max-w-5xl mx-auto top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 ios-blur border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <div className="bg-custom-primary p-0.5 rounded-sm">
                <BiTerminal className="text-white size-6" />
              </div>
              <span className="font-bold">CodeAI</span>
            </div>
          </Link>
        </div>

        {!isPending && session?.user ? (
          <div className="flex space-x-10">
            <Link
              className="p-2 text-white rounded-md text-sm tracking-tight"
              href={"/explainer"}
            >
              {" "}
              Explainer
            </Link>
            <Link
              className="p-2 text-white rounded-md text-sm tracking-tight"
              href={"/history"}
            >
              {" "}
              History
            </Link>
            <Link
              className="p-2 text-white rounded-md text-sm tracking-tight"
              href={"/settings"}
            >
              {" "}
              Settings
            </Link>
            <button
              type="button"
              onClick={async () => {
                await signOut();
                toast.success("Log out successfully.");
                router.replace("/");
              }}
              className="p-2 bg-blue-600/30 text-white rounded-md text-sm tracking-tight"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            href={"/login"}
            className="p-2 bg-blue-600/30 text-white rounded-md text-sm tracking-tight"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navigation;
