"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/contexts";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const nextTheme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={cycleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors",
        className
      )}
      aria-label={`Current theme: ${theme}. Click to change.`}
    >
      {theme === "light" && <Sun className="w-5 h-5" />}
      {theme === "dark" && <Moon className="w-5 h-5" />}
      {theme === "system" && <Monitor className="w-5 h-5" />}
    </button>
  );
}
