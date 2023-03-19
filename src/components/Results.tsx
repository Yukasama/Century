import Link from "next/link";

type Props = {
  results: Product[];
};

export default function Results({ results }: Props) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
      {results.map((result) => (
        <Link
          href={result.url}
          target="_blank"
          className="flex flex-col space-x-5 w-full bg-sun-200 
          dark:bg-moon-400 rounded-xl shadow-md p-5 hover:scale-[1.02] 
          duration-300 transition-transform">
          <img
            className="object-contain w-full h-60 xl:h-48 py-5"
            srcSet={result.imageset}
            alt={result.title}
          />

          <div className="flex flex-col py-5 flex-1">
            <p className="font-bold">{result.title}</p>
            <p className="text-sm text-sun-900">
              {result.rating} ({result.reviews} reviews)
            </p>
          </div>

          <div className="flex space-x-2 justify-end flex-1">
            <p className="font-bold text-purple-600 pt-2 text-xl mt-auto">
              {result.price > 0 ? `$${result.price}` : "N/A"}
            </p>
            {result.previous_price > 0 && (
              <p
                className="font-bold text-purple-600/60 line-through pt-2 
              text-xl font-sm mt-auto">
                ${result.previous_price}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 justify-end mt-5">
            {result.features.map(
              (feature) =>
                feature && (
                  <p
                    key={feature}
                    className="text-xs text-sun-100 bg-purple-600 px-2 py-1 rounded-md">
                    {feature}
                  </p>
                )
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
