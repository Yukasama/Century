"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { DocumentData } from "firebase/firestore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "react-spinkit";

type Props = {
  doc: DocumentData;
};

export default function SidebarRow({ doc }: Props) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(doc.id));
  }, [pathname, doc]);

  return (
    <Link
      className={`flex flex-col md:flex-row gap-2 justify-between p-4 cursor-pointer hover:bg-sun-400 
      dark:hover:bg-moon-400 hover:shadow-md rounded-lg ${
        active && "bg-sun-200 dark:bg-moon-100 shadow-md"
      }`}
      href={`/search/${doc.id}`}>
      <div className="flex flex-col justify-center">
        <p className="text-xs md:text-base font-bold">{doc.data().search}</p>
        {doc.data().status === "pending" && (
          <p className="text-xs">Scraping Results...</p>
        )}
      </div>

      <span className="mx-2">
        {doc.data().status === "pending" ? (
          <Spinner name="cube-grid" fadeIn="none" color="indigo" />
        ) : (
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
        )}
      </span>
    </Link>
  );
}
