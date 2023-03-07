"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current?.value;
    if (!input) return;
    else {
      inputRef.current.value = "";
    }

    try {
    } catch {}
  };

  return (
    <header className="flex items-center">
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 justify-center rounded-full 
        py-2 px-4 bg-purple-100 dark:bg-purple-500 max-w-md">
        <input
          type="text"
          ref={inputRef}
          placeholder="Search..."
          className="flex-1 outline-none bg-purple-100 dark:bg-purple-500 
          text-purple-500 dark:text-purple-100 placeholder:text-purple-400 
          dark:placeholder:text-purple-300"
        />
        <button hidden>Search</button>
        <MagnifyingGlassIcon className="h-6 w-6 text-purple-400 dark:text-purple-300" />
      </form>
      <ThemeToggler />
    </header>
  );
}
