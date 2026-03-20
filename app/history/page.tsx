import LanguageChip from "@/components/ui/LanguageChip";
import Navigation from "@/components/ui/Navigation";
import {
  BiCode,
  BiCoinStack,
  BiDotsVerticalRounded,
  BiLogoCPlusPlus,
  BiLogoDjango,
  BiLogoFlask,
  BiLogoFlutter,
  BiLogoGoLang,
  BiLogoGraphql,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoVuejs,
  BiSolidInvader,
} from "react-icons/bi";

import { BiTerminal } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { FaJava, FaPython } from "react-icons/fa";

const HistoryPage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex min-h-screen flex-col mx-auto overflow-x-hidden pt-6">
        <Navigation />

        <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar scroll-smooth">
          <button className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-xl bg-custom-primary px-4 text-white shadow-lg shadow-primary/20">
            <BsStars className="text-[18px]" />
            <span className="text-sm font-medium">All</span>
          </button>

          {/* Python Chip */}
          <LanguageChip
            language="Python"
            icon={<FaPython className="text-[18px] text-amber-500" />}
          />

          {/* JS Chip */}
          <LanguageChip
            language="JavaScript"
            icon={<BiLogoJavascript className="text-[18px] text-yellow-400" />}
          />

          {/* Java Chip */}
          <LanguageChip
            language="Java"
            icon={<FaJava className="text-[18px] text-blue-400" />}
          />

          {/* Go Chip */}
          <LanguageChip
            language="Go"
            icon={<BiLogoGoLang className="text-[24px] text-cyan-400" />}
          />

          {/* Nodejs Chip */}
          <LanguageChip
            language="Nodejs"
            icon={<BiLogoNodejs className="text-[18px] text-green-400" />}
          />

          {/* Php Chip */}
          <LanguageChip
            language="Php"
            icon={<BiLogoPhp className="text-[24px] text-purple-400" />}
          />

          {/* C++ Chip */}
          <LanguageChip
            language="C++"
            icon={<BiLogoCPlusPlus className="text-[18px] text-blue-400" />}
          />

          {/* TypeScript Chip */}
          <LanguageChip
            language="TypeScript"
            icon={<BiLogoTypescript className="text-[18px] text-blue-400" />}
          />

          {/* Flutter Chip */}
          <LanguageChip
            language="Flutter"
            icon={<BiLogoFlutter className="text-[18px] text-cyan-400" />}
          />

          {/* Rust Chip */}
          <LanguageChip
            language="Rust"
            icon={<BiSolidInvader className="text-[18px] text-red-400" />}
          />

          {/* GraphQL Chip */}
          <LanguageChip
            language="GraphQL"
            icon={<BiLogoGraphql className="text-[18px] text-pink-700" />}
          />

          {/* Postgres */}
          <LanguageChip
            language="PostgreSQL"
            icon={<BiLogoPostgresql className="text-[18px] text-blue-400" />}
          />

          {/* MongoDB */}
          <LanguageChip
            language="Mongo"
            icon={<BiLogoMongodb className="text-[18px] text-green-700" />}
          />

          {/* React Chip */}
          <LanguageChip
            language="React"
            icon={<BiLogoReact className="text-[18px] text-cyan-400" />}
          />

          {/* Vuejs Chip */}
          <LanguageChip
            language="Vuejs"
            icon={<BiLogoVuejs className="text-[18px] text-green-700" />}
          />

          {/* Flask Chip */}
          <LanguageChip
            language="Flask"
            icon={<BiLogoFlask className="text-[18px] text-white" />}
          />

          {/* Django Chip */}
          <LanguageChip
            language="Django"
            icon={<BiLogoDjango className="text-[18px] text-green-700" />}
          />
        </div>

        <main className="flex flex-col p-4 gap-4">
          <div className="group relative flex flex-col gap-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all active:scale-[0.98]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BiTerminal className="text-[24px]" />
                </div>

                <div>
                  <h3 className="font-bold text-sm leading-tight">
                    React useEffect hook explanation
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                    TypeScript • 2h ago
                  </p>
                </div>
              </div>

              <BiDotsVerticalRounded className="text-[18px]" />
            </div>

            <div className="rounded-lg bg-code-bg p-3 font-mono text-[11px] leading-relaxed text-blue-100 overflow-hidden">
              <div className="flex gap-2">
                <span className="text-purple-400">useEffect</span>(() =&gt;
                &#x7B;
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-blue-400">const</span> sub = api.
                <span className="text-yellow-200">subscribe</span>();
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-red-400">return</span> () =&gt; sub.
                <span className="text-yellow-200">unsubscribe</span>();
              </div>
              <div className="flex gap-2">&#x7D;, [api]);</div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
              Explained dependency arrays and cleanup functions. Clarified how
              to prevent memory leaks in event listeners.
            </p>
          </div>
          <div className="group relative flex flex-col gap-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all active:scale-[0.98]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BiCode className="text-[24px]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">
                    Binary Search implementation
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                    Python • Yesterday
                  </p>
                </div>
              </div>
              <BiDotsVerticalRounded className="text-[18px]" />
            </div>
            <div className="rounded-lg bg-code-bg p-3 font-mono text-[11px] leading-relaxed text-blue-100 overflow-hidden">
              <div className="flex gap-2">
                <span className="text-red-400">while</span> low &lt;= high:
              </div>
              <div className="flex gap-2 pl-4">
                mid = (low + high) // <span className="text-orange-400">2</span>
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-red-400">if</span> arr[mid] == target:
              </div>
              <div className="flex gap-2 pl-8">
                <span className="text-red-400">return</span> mid
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
              Breakdown of O(log n) time complexity. Detailed how the midpoint
              is calculated to avoid overflow issues in large arrays.
            </p>
          </div>
          <div className="group relative flex flex-col gap-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all active:scale-[0.98]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BiCoinStack className="text-[24px]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">
                    SQL Join optimization
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                    SQL • Oct 20
                  </p>
                </div>
              </div>
              <BiDotsVerticalRounded className="text-[18px]" />
            </div>
            <div className="rounded-lg bg-code-bg p-3 font-mono text-[11px] leading-relaxed text-blue-100 overflow-hidden">
              <div className="flex gap-2">
                <span className="text-purple-400 uppercase">SELECT</span>{" "}
                u.name, o.total
              </div>
              <div className="flex gap-2">
                <span className="text-purple-400 uppercase">FROM</span> users u
              </div>
              <div className="flex gap-2">
                <span className="text-purple-400 uppercase">LEFT JOIN</span>{" "}
                orders o <span className="text-purple-400 uppercase">ON</span>{" "}
                u.id = o.user_id
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
              Analysis of indexing on user_id and comparison between Hash Joins
              and Nested Loop Joins for this dataset size.
            </p>
          </div>
          <div className="group relative flex flex-col gap-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all active:scale-[0.98]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BiLogoPhp className="text-[24px]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">
                    Borrow Checker &amp; Ownership
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                    Rust • Oct 18
                  </p>
                </div>
              </div>
              <BiDotsVerticalRounded className="text-[18px]" />
            </div>
            <div className="rounded-lg bg-code-bg p-3 font-mono text-[11px] leading-relaxed text-blue-100 overflow-hidden">
              <div className="flex gap-2">
                <span className="text-blue-400">let</span> s1 ={" "}
                <span className="text-yellow-200">String::from</span>(
                <span className="text-green-400">"hello"</span>);
              </div>
              <div className="flex gap-2">
                <span className="text-blue-400">let</span> len ={" "}
                <span className="text-yellow-200">calculate_length</span>
                (&amp;s1);
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
              Explanation of referencing and borrowing. Detailed why 's1'
              remains valid after the function call due to the &amp; operator.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HistoryPage;
