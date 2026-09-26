import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="mt-8 flex min-h-[278px] w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#191c22] px-6 text-center">
      <h1 className="text-3xl font-semibold uppercase text-gray-100">
        Nothing Here Yet
      </h1>

      <p className="mt-4 text-base text-gray-400 sm:text-lg">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/workout">
        <button
          className="mt-8 rounded-2xl bg-[#c8ff00] px-6 py-3
                 font-semibold text-black transition
                 hover:bg-[#b8ed00] hover:scale-105"
        >
          Go to workouts
        </button>
      </Link>
    </div>
  );
};

export default EmptyState;
