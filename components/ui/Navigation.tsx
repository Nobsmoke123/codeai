import Link from "next/link";
import { BiTerminal } from "react-icons/bi";

const Navigation = () => {
  // Top Navigation
  return (
    <header className="sticky w-full max-w-5xl mx-auto top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 ios-blur border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-custom-primary p-0.5 rounded-sm">
              <BiTerminal className="text-white size-6" />
            </div>
            <span className="font-bold">CodeAI</span>
          </div>
        </div>
        <div className="flex space-x-10">
          <Link href={"/explainer"}> Explainer</Link>
          <Link href={"/history"}> History</Link>
          <Link href={"/settings"}> Settings</Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
