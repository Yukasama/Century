"use client";

import { db } from "../../../../firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";

export default function Search({ params: { id } }: { params: { id: string } }) {
  const [snapshot, loading, error] = useDocument(doc(db, "searches", id));

  if (loading) return <div>loading</div>;

  if (!snapshot?.exists()) return <div>not found</div>;

  if (snapshot.data()?.status === "pending")
    return (
      <div className="flex flex-col gap-y-5 py-10 items-center justify-between">
        <p className="text-purple-600 animate-pulse text-center">
          Scraping results from Amazon...
        </p>
      </div>
    );

  return (
    <div>
      <div className="flex items-center justify-between mb-7">
        <div className="flex flex-col md:flex-row gap-x-4">
          <h1 className="font-bold">
            Search Results for{" "}
            <span className="text-purple-600">"{snapshot.data()?.search}"</span>
          </h1>
          <p className="text-sun-500">
            {snapshot.data()?.results?.length > 0 &&
              `${snapshot.data()?.results?.length} results found`}
          </p>
        </div>
      </div>
    </div>
  );
}
