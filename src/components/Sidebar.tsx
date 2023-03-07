import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-purple-500/50">
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-purple-500" />
        <h1 className="hidden md:inline text-center text-3xl mt-2 font-medium mb-1">Century</h1>
        <h2 className="hidden md:inline text-center text-xs italic">
          Scraping the Unscrapable
        </h2>
      </div>
      <ul></ul>
    </div>
  );
}
