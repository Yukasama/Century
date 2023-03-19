"use client";

import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { query, collection, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import SidebarRow from "./SidebarRow";

export default function Sidebar() {
  const [snapshot, loading, error] = useCollection(
    query(collection(db, "searches"), orderBy("start_eta", "desc"))
  );

  return (
    <div className="p-2 md:p-6 md:w-80 py-6 border-r border-purple-500/10">
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-purple-500" />
        <h1 className="hidden md:inline text-center text-3xl mt-2 font-medium mb-1">
          Century
        </h1>
        <h2 className="hidden md:inline text-center text-xs italic">
          Scraping the Unscrapable
        </h2>
      </div>
      <ul className="flex flex-col gap-2 py-2 overflow-y-auto">
        {snapshot?.docs.map((doc) => (
          <SidebarRow key={doc.id} doc={doc} />
        ))}
      </ul>
    </div>
  );
}
