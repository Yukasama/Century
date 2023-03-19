"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="rounded-lg h-10 w-10 bg-moon-100/70"></div>;
  }

  return (
    <div
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      className="rounded-lg hover:bg-sun-400 h-9 w-9 flex justify-center items-center 
      dark:hover:bg-moon-100 transition-none cursor-pointer">
      {theme === "dark" ? (
        <SunIcon className="text h-7 w-7" />
      ) : (
        <MoonIcon className="text h-6 w-6" />
      )}
    </div>
  );
}
