import Navigation from "@/components/ui/Navigation";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { BiCode, BiCoinStack, BiDotsVerticalRounded } from "react-icons/bi";

import { BiTerminal } from "react-icons/bi";

const HistoryPage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="w-full max-w-5xl mx-auto bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex min-h-screen flex-col mx-auto overflow-x-hidden pt-6">
        <Navigation />

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
                  <BiCode className="text-[24px]" />
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
