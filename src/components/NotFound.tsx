import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center mt-60">
      <p className="font-bold text-xl">Page Not Found</p>
      <Link href="/">
        <button className="p-2 px-5 text-sun-100 bg-purple-500 dark:bg-purple-600">
          Go Home
        </button>
      </Link>
    </div>
  );
}
