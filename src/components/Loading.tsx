import Spinner from "react-spinkit";

export default function Loading() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center mt-60">
      <Spinner
        style={{
          height: "100px",
          width: "100px",
        }}
        name="cube-grid"
        fadeIn="none"
        color="#6870fa"
      />
      <p className="text-purple-600">Loading Results...</p>
    </div>
  );
}
