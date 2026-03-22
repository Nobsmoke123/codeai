"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

type ThemeOption = "light" | "dark" | "system";
const options: ThemeOption[] = ["light", "dark", "system"];

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
      {options.map((option) => {
        const active = theme === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={clsx(
              "py-1.5 text-sm font-medium rounded-md text-slate-400 dark:text-white",
              active
                ? "bg-blue-600 dark:text-white"
                : "text-slate-600 dark:text-slate-400",
            )}
          >
            {option[0].toUpperCase() + option.slice(1).toLowerCase()}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSelector;
