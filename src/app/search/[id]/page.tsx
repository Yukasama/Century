"use client";

import { db } from "../../../../firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";

export default function Search({ params: { id } }: { params: { id: string } }) {
  const [snapshot, loading, error] = useDocument(doc(db, "searches", id));

  if (loading) return <div>loading</div>;

  if(!snapshot?.exists()) return <div>not found</div>;

  if(snapshot.data()?.status === "pending") return(
    <div>
      Scraping results from Amazon...
    </div>
  )

  return <div>page</div>;
}
