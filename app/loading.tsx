import { BiSolidBulb, BiTerminal } from "react-icons/bi";
import { BsStars } from "react-icons/bs";

const Loading = () => {
  return (
    <div className="bg-background-dark dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-hidden">
      <div className="flex  w-full max-w-md mx-auto flex-col bg-background-dark dark:bg-background-dark overflow-hidden">
        <div className="flex items-center px-4 pt-4 pb-2 justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-custom-primary p-0.5 rounded-sm">
              <BiTerminal className="text-white size-6" />
            </div>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            CodeAI
          </h2>
        </div>

        <div className="hidden lg:flex flex-col gap-4 px-4 py-3 opacity-20 pointer-events-none">
          <label className="flex flex-col w-full">
            <p className="text-base font-medium pb-2">Source Code</p>
            <div className="w-full rounded-xl bg-slate-200 dark:bg-slate-800 h-[45vh] p-4 font-mono text-sm overflow-hidden">
              <span className="text-blue-400">async</span>{" "}
              <span className="text-yellow-400">function</span>{" "}
              <span className="text-green-400">fetchData</span>() &#x7B;
              <br />
                <span className="text-blue-400">try</span> &#x7B;
              <br />
                  <span className="text-blue-400">const</span> response ={" "}
              <span className="text-blue-400">await</span> fetch(
              <span className="text-orange-400">'https://api.example.com'</span>
              );
              <br />
                  <span className="text-blue-400">const</span> data ={" "}
              <span className="text-blue-400">await</span> response.json();
              <br />
                  console.log(data);
              <br />
                &#x7D; <span className="text-blue-400">catch</span> (error)
              &#x7B;
              <br />
                  console.error(
              <span className="text-orange-400">'Error fetching data'</span>,
              error);
              <br />
                &#x7D;
              <br />
               &#x7D;
            </div>
          </label>
        </div>

        <div className="flex flex-col items-center justify-center glass-overlay px-6 mt-10">
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute size-32 rounded-full border-4 border-custom-primary/20 animate-pulse"></div>
            <div className="size-24 rounded-full border-4 border-t-custom-primary border-r-transparent border-b-custom-primary border-l-transparent animate-spin"></div>
            <div className="absolute size-14 bg-custom-primary rounded-full orb-glow flex items-center justify-center">
              <BsStars className="text-white text-3xl" />
            </div>
          </div>
          <div className="text-center space-y-2 max-w-xs">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Analyzing your code...
            </h3>
            <div className="h-1 w-48 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-custom-primary rounded-full w-2/3 shadow-[0_0_10px_rgba(19,91,236,0.6)]"></div>
            </div>
          </div>
          <div className="mt-8 text-center min-h-[4rem]">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed">
              Identifying patterns and syntax structures...
            </p>
            <div className="mt-2 flex items-center justify-center gap-1.5">
              <div className="size-1.5 rounded-full bg-custom-primary"></div>
              <div className="size-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
              <div className="size-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </div>
          </div>
          <div className="mt-12 w-full max-w-sm bg-white/5 dark:bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
            <div className="flex gap-3">
              <div className="size-10 rounded-lg bg-custom-primary/10 flex items-center justify-center shrink-0">
                <BiSolidBulb className="text-custom-primary text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Did you know?
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Our AI can explain code in over 50 programming languages
                  including Python, Swift, and Rust.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center px-4 mt-6">
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-semibold transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
              <span className="truncate">Cancel Request</span>
            </button>
          </div>
        </div>
        <div className="h-8 w-full flex justify-center items-end pb-2">
          <div className="w-32 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
