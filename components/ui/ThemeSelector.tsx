"use client";

import { clsx } from "clsx";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

type ThemeOption = "light" | "dark";

const options: Array<{
  icon: React.ReactNode;
  label: string;
  value: ThemeOption;
}> = [
  {
    icon: <BsSunFill className="text-sm" />,
    label: "Light",
    value: "light",
  },
  {
    icon: <BsMoonStarsFill className="text-sm" />,
    label: "Dark",
    value: "dark",
  },
];

const subscribe = () => {
  return () => {};
};

const getSnapshot = () => true;
const getServerSnapshot = () => false;

const ThemeSelector = () => {
  const { setTheme, theme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!mounted) {
    return null;
  }

  const activeTheme = theme === "light" ? "light" : "dark";

  return (
    <div className="grid grid-cols-2 rounded-2xl border border-panel-border bg-panel p-1">
      {options.map((option) => {
        const active = activeTheme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={clsx(
              "flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all",
              active
                ? "bg-primary text-black dark:text-white shadow-lg shadow-primary/20"
                : "text-slate-600 hover:bg-white/80 text-black dark:text-slate-400 dark:hover:bg-slate-950/70",
            )}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSelector;
