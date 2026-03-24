"use client";

import { clsx } from "clsx";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

type ThemeToggleProps = {
  className?: string;
  compact?: boolean;
};

const subscribe = () => {
  return () => {};
};

const getSnapshot = () => true;
const getServerSnapshot = () => false;

const ThemeToggle = ({
  className,
  compact = false,
}: ThemeToggleProps) => {
  const { setTheme, theme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const activeTheme = mounted ? (theme === "light" ? "light" : "dark") : "dark";
  const isDark = activeTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-panel-border bg-panel p-1 text-slate-700 backdrop-blur-xl transition hover:border-primary/30 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white",
        compact ? "pl-1 pr-1.5" : "pl-1 pr-3",
        className,
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-full bg-white text-amber-500 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:text-sky-300 dark:ring-slate-800">
        {isDark ? <BsMoonStarsFill className="text-sm" /> : <BsSunFill className="text-sm" />}
      </span>
      {!compact && (
        <span className="hidden text-[10px] font-black uppercase tracking-[0.28em] sm:inline">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
