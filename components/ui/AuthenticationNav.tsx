import Link from "next/link";
import { BiTerminal } from "react-icons/bi";

const AuthenticationNav = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0B0D11] dark:bg-[#0B0D11] bg-gradient-to-b from-[#135BEC]/10 to-transparent shadow-[0_0_40px_-10px_rgba(19,91,236,0.3)]">
      <div className="flex items-center justify-between px-6 h-16 w-full">
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
      </div>
    </header>
  );
};

export default AuthenticationNav;
