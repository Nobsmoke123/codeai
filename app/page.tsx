import Features from "@/components/layouts/Features";
import Hero from "@/components/layouts/Hero";
import Navigation from "@/components/ui/Navigation";
import { webApplicationJsonLd, websiteJsonLd } from "@/lib/seo";
import Link from "next/link";
import { BsCodeSlash, BsTencentQq, BsTerminal, BsUbuntu } from "react-icons/bs";
import { MdHub } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-gradient-to-b from-page-shell via-white to-slate-100 font-sans dark:from-background-dark dark:via-black dark:to-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationJsonLd),
        }}
      />
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between px-4 pt-6 sm:items-start sm:px-6">
        <Navigation />

        {/* Hero Content */}
        <Hero />

        <Features />

        {/* <!-- Social Proof --> */}
        <div className="mt-16 flex w-full flex-col items-center gap-4 border-t border-slate-200 pt-8 opacity-60 dark:border-slate-800">
          <p className="text-xs uppercase tracking-widest font-bold">
            Trusted by 10k+ Developers
          </p>
          <div className="flex gap-6 items-center">
            <MdHub className="text-2xl" />

            <BsUbuntu className="text-2xl" />

            <BsTencentQq className="text-2xl" />

            <BsCodeSlash className="text-2xl" />

            <BsTerminal className="text-2xl" />
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.3em]">
            Transparent product policies
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-primary">
              Terms
            </Link>
          </div>
        </div>

        {/* <!-- iOS Home Indicator Spacing --> */}
        <div className="h-8 w-full"></div>
      </main>
    </div>
  );
}
