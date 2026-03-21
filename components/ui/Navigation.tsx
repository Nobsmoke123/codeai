import { getServerSession } from "@/lib/session";
import Link from "next/link";
import { BiTerminal } from "react-icons/bi";

const Navigation = async () => {
  const session = await getServerSession();

  // Top Navigation
  return (
    <header className="sticky w-full max-w-5xl mx-auto top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 ios-blur border-b border-slate-200 dark:border-slate-800">
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

        {session?.user ? (
          <div className="flex space-x-10">
            <Link href={"/explainer"}> Explainer</Link>
            <Link href={"/history"}> History</Link>
            <Link href={"/settings"}> Settings</Link>
          </div>
        ) : (
          <Link href={"/auth/signIn"}> Sign In</Link>
        )}
      </div>
    </header>
  );
};

export default Navigation;
