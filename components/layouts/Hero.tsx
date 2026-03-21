import Link from "next/link";
import { BsArrowRight, BsArrowUpRight, BsStars } from "react-icons/bs";

const Hero = () => {
  return (
    <main className="w-full sm:max-w-md lg:max-w-3xl mx-auto mt-6 px-6 pt-4 pb-20 flex flex-col items-center text-center">
      <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-custom-primary/10 border border-custom-primary/20">
        <BsStars className="text-sm" />
        <span className="text-xs font-light text-custom-primary uppercase tracking-wider">
          Now with GPT-4o
        </span>
      </div>
      <h1 className="text-4xl font-black leading-tight tracking-tight mb-4 text-slate-900 dark:text-white">
        Understand Code <br />
        <span className="text-custom-primary">in Seconds</span>
      </h1>
      <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-[320px]">
        Upload snippets or point your camera. Our AI breaks down complex logic
        into human-readable explanations instantly.
      </p>
      {/* AI Visualization Component */}
      <div className="relative sm:w-full lg:w-md aspect-video mb-12 rounded-xl bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 p-4 code-glow overflow-hidden">
        <div className="flex justify-between items-start gap-4">
          {/* Code Snippet Side */}
          <div className="flex-1 text-left font-mono text-[10px] space-y-1 opacity-60">
            <div className="text-blue-400">
              async function <span className="text-yellow-300">fetchData</span>
              () &#x7B;
            </div>
            <div className="pl-3 text-slate-400">
              const res = await fetch(url);
            </div>
            <div className="pl-3 text-slate-400">
              const data = await res.json();
            </div>
            <div className="pl-3 text-purple-400">
              return data.filter(d =&gt; d.id &gt; 0);
            </div>
            <div className="text-blue-400">&#x7D;</div>
          </div>
          {/* <!-- Arrow Icon --> */}
          <div className="flex items-center self-center h-full">
            <BsArrowRight className="text-custom-primary text-3xl" />
          </div>
          {/* <!-- Explanation Side --> */}
          <div className="flex-1 text-left space-y-2 py-1">
            <div className="h-2 w-full bg-slate-300 dark:bg-slate-700 rounded-full"></div>
            <div className="h-2 w-4/5 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
            <div className="h-2 w-full bg-custom-primary/40 rounded-full"></div>
            <div className="h-2 w-3/4 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
          </div>
        </div>
        {/* <!-- Floating Decorative Element --> */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 blur-3xl rounded-full"></div>
        {/* <!-- Abstract Background Image Overlay --> */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10"
          data-alt="Abstract dark background with faint grid pattern"
          style={{
            backgroundImage: `url(
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVVyc6otlmFU7_pQzPwe-wEJ7RPUIUG66I1iSVOw4AAmLHkhJoqfF69gDyRYm0XOGgQERKHwbB4Flu5DyxLT5omp6JEGmhSGjsenltNqmFJvadD71seCpzPOOe4mPXtNJQTa1PGrSiNtUiaAarnnHitn3rJ-BUW5Gm7Rm2I7sfnhktqO0eToHb0FVLJiWiAGSE7xr6IkzhPVEOdPPUIN4u3gooVTUtjEUTnhT1Cb6lPUzI_ZLiuRfojTEq0FuOhKqouoH1nzbMmOA",
                )`,
          }}
        ></div>
      </div>
      {/* <!-- CTA Buttons --> */}
      <div className="w-full max-w-md space-y-4 mx-auto">
        <Link
          href={"/register"}
          className="w-full max-w-md py-4 bg-custom-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
        >
          <span>Get Started</span>
          <BsArrowUpRight className="" />
        </Link>
        <button className="w-full max-w-md py-4 bg-transparent text-slate-600 dark:text-slate-400 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
          See Examples
        </button>
      </div>
    </main>
  );
};

export default Hero;
