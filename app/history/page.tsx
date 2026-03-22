import Navigation from "@/components/ui/Navigation";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { cookies } from "next/headers";

import { BiTerminal } from "react-icons/bi";
import { Explanation } from "@/lib/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const HistoryPage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login");
  }

  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL!}/api/explanations`,
    {
      headers: {
        cookie: cookieHeader,
      },
      cache: "no-store",
    },
  );

  const explanations = (await data.json()) as Array<Explanation>;

  return (
    <div className="w-full max-w-5xl mx-auto bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex min-h-screen flex-col mx-auto overflow-x-hidden pt-6">
        <Navigation />

        <main className="flex flex-col p-4 gap-4">
          {explanations.length &&
            explanations.map((explanation) => (
              <div
                key={explanation.code_hash}
                className="group relative flex flex-col gap-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all active:scale-[0.98]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <BiTerminal className="text-[24px]" />
                    </div>

                    <div>
                      <h3 className="font-bold text-sm leading-tight">
                        {explanation.title}
                      </h3>
                      <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                        {explanation.language.charAt(0).toUpperCase() +
                          explanation.language.slice(1).toLowerCase()}{" "}
                        • 2h ago
                      </p>
                    </div>
                  </div>

                  <BiDotsVerticalRounded className="text-[18px]" />
                </div>

                <div className="rounded-lg bg-code-bg p-3 font-mono text-[11px] leading-relaxed text-blue-100 overflow-hidden">
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={explanation.language}
                    showLineNumbers={true}
                    useInlineStyles={true}
                    className="bg-slate-950"
                  >
                    {explanation.code}
                  </SyntaxHighlighter>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {explanation.summary}
                </p>
              </div>
            ))}
        </main>
      </div>
    </div>
  );
};

export default HistoryPage;
