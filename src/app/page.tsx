import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ThemeToggler from "../components/ThemeToggler";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-purple-600/40" />
      <h1 className="text-3xl mt-2 text-center font-bold mb-5">
        Century Web Scraper
      </h1>
      <h2 className="text-lg italic text-center text-sun-600 dark:text-sun-400/50 ">
        Enter a search query to find Amazon Results
      </h2>
    </div>
  );
}
