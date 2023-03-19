"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import ThemeToggler from "./ThemeToggler";
import toast from "react-hot-toast";

export default function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;
    if (!input) return;
    else inputRef.current.value = "";

    const notification = toast.loading(`Creating Scraper for ${input}...`);

    try {
      const response = await fetch("/activateScraper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: input }),
      });

      const { collection_id } = await response.json();

      toast.success("Scraper started successfully", {
        id: notification,
      });

      router.push(`/search/${collection_id}`);
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        id: notification,
      });
    }
  };

  return (
    <header
      className="flex top-0 justify-center border-b border-purple-500/10 
    items-center gap-3 bg-sun-300 dark:bg-moon-300 p-4">
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 justify-center rounded-full 
        py-2 px-4 bg-purple-100 dark:bg-purple-500 max-w-md flex-auto">
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
