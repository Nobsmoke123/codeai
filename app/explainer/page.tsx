import Navigation from "@/components/ui/Navigation";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { BiClipboard, BiSolidCheckShield } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { MdPsychology } from "react-icons/md";

const EditorPage = async () => {
  const session = await getServerSession();

  if(!session?.user){
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-dark font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between pt-6 px-6 bg-white dark:bg-black sm:items-start">
        <Navigation />

        <main className="flex-1 flex flex-col p-4 space-y-6 max-w-5xl mx-auto w-full">
          {/* Title & Intro */}
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Enter Code</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Paste your snippet below for a detailed AI analysis.
            </p>
          </div>
          {/* Language Selector Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Language
              </span>
              <span className="text-xs text-primary font-medium">
                Auto-detecting...
              </span>
            </div>
          </div>
          {/* Code Input Area */}
          <div className="relative flex-1 group">
            <div className="absolute top-3 right-3 z-10">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 hover:bg-slate-800 text-white rounded-lg text-xs font-medium border border-slate-700 transition-all active:scale-95">
                <BiClipboard className="text-[16px]" />
                Paste
              </button>
            </div>
            <div className="h-full min-h-[300px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm flex overflow-hidden ring-1 ring-slate-900/5 focus-within:ring-primary focus-within:border-primary transition-all">
              {/* Line numbers simulation */}
              <div className="w-10 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col items-center pt-4 text-[10px] font-mono text-slate-400 select-none leading-[1.625rem]">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
              {/* Actual Textarea */}
              <textarea
                className="flex-1 p-4 font-mono text-sm leading-relaxed bg-transparent border-none focus:ring-0 resize-none placeholder:italic"
                placeholder="// Paste your code here to get a human-friendly explanation..."
              ></textarea>
            </div>
          </div>
          {/* Feature Tags / Quick Actions */}
          <div className="flex flex-wrap justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <BiSolidCheckShield className="text-[18px]" />
              <span className="text-xs">Security checked</span>
            </div>

            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <MdPsychology className="text-[18px]" />
              <span className="text-xs">LLM-v4 Powered</span>
            </div>
          </div>
        </main>

        {/* Bottom Action Area */}
        <footer className="p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pb-8 mx-auto">
          <div className="max-w-lg mx-auto flex flex-col space-y-3">
            <button className="w-full bg-custom-primary hover:bg-custom-primary/90 text-white font-bold py-4 rounded-2xl shadow-xl shadow-custom-primary/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
              <BsStars className="text-[18px]" />
              Explain Code
            </button>
            <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 px-6 leading-tight">
              By using CodeAI, you agree to our terms. AI can sometimes generate
              incorrect explanations. Use with caution.
            </p>
          </div>
        </footer>
        {/* Abstract Gradient Background Elements (Subtle) */}
        <div className="fixed -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="fixed top-1/2 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
      </main>
    </div>
  );
};

export default EditorPage;
