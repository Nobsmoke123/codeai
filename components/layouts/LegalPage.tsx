import AuthenticationNav from "@/components/ui/AuthenticationNav";
import Link from "next/link";
import type { IconType } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalHighlight = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
  highlights: LegalHighlight[];
  relatedPage: {
    href: string;
    label: string;
  };
};

const LegalPage = ({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
  highlights,
  relatedPage,
}: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-[#0B0D11] text-slate-100">
      <AuthenticationNav />

      <main className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6">
        <div className="absolute top-20 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6">
          <section className="rounded-[28px] border border-slate-800 bg-slate-900/70 p-6 shadow-[0_0_60px_-24px_rgba(19,91,236,0.45)] backdrop-blur-xl sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                {eyebrow}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  {description}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Last Updated
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {lastUpdated}
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            {highlights.map(({ title, value, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {title}
                    </p>
                    <p className="mt-1 text-base font-semibold text-white">
                      {value}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {description}
                </p>
              </article>
            ))}
          </section>

          <section className="rounded-[28px] border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className={`p-6 sm:p-8 ${
                  index < sections.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }`}
              >
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </section>

          <section className="flex flex-col gap-4 rounded-[28px] border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                Related Page
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Keep the legal basics close at hand.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                You can also return to the landing page or read the companion
                legal document for the rest of the policy set.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800/70"
              >
                Back Home
              </Link>
              <Link
                href={relatedPage.href}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                {relatedPage.label}
                <BsArrowRight />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LegalPage;
