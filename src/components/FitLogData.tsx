import { inter, oswald } from "@/app/font";
import WorkoutLibrary from "./WorkoutLibrary";
import Link from "next/link";
import { Iworkout } from "@/type";

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch workouts: ${res.status}`);
  }

  return res.json();
};

const FitlogData = async () => {
  const data: Iworkout[] = await getData();

  return (
    <section className="container mx-auto px-5 py-6">
      <h1 className={`${oswald.className} text-4xl text-white`}>THE LIBRARY</h1>
      <p className={` mt-3 ${inter.className} text-[#9CA3AF]`}>
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((workout: Iworkout) => (
          <Link href="/workout-details" key={workout.id}>
            <WorkoutLibrary key={workout.id} workout={workout} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FitlogData;
