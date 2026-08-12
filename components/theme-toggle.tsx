"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-white/10" />
    );
  }

  const Icon =
    theme === "light"
      ? Sun
      : theme === "system"
        ? Monitor
        : Moon;

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/25 hover:text-white"
      aria-label="Toggle theme"
    >
      <Icon size={16} />
    </button>
  );
}