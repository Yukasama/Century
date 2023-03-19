"use client";

import { db } from "../../../../firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { deleteDoc, doc } from "firebase/firestore";
import Results from "../../../components/Results";
import NotFound from "../../../components/NotFound";
import Spinner from "react-spinkit";
import { useRouter } from "next/navigation";
import Loading from "../../../components/Loading";

export default function Search({ params: { id } }: { params: { id: string } }) {
  const [snapshot, loading, error] = useDocument(doc(db, "searches", id));
  const router = useRouter();

  const handleDelete = () => {
    deleteDoc(doc(db, "searches", id));
    router.push("/");
  };

  const deleteButton = (
    <button
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg 
      text-sun-100 font-semibold"
      onClick={handleDelete}>
      Delete
    </button>
  );

  if (loading) return <Loading />;

  if (!snapshot?.exists()) return <NotFound />;

  if (snapshot.data()?.status === "pending")
    return (
      <div className="flex flex-col gap-y-5 py-10 items-center justify-between">
        <p className="text-purple-600 font-semibold animate-pulse text-center">
          Scraping Results from Amazon...
        </p>
        <Spinner
          style={{
            height: "100px",
            width: "100px",
          }}
          name="cube-grid"
          fadeIn="none"
          color="#6870fa"
        />
        {deleteButton}
      </div>
    );

  return (
    <div className="pt-1 pb-20">
      <div className="flex items-center justify-between mb-5">
        <div className="flex flex-col md:flex-row gap-x-4">
          <h1 className="font-bold">
            Search Results for{" "}
            <span className="text-purple-600">"{snapshot.data()?.search}"</span>
          </h1>
          <p className="text-sun-600">
            {snapshot.data()?.results?.length > 0 &&
              `${snapshot.data()?.results?.length} results found`}
          </p>
        </div>
        <div className="mr-2">{deleteButton}</div>
      </div>

      {snapshot.data()?.results?.length > 0 && (
        <Results results={snapshot.data()?.results} />
      )}
    </div>
  );
}
