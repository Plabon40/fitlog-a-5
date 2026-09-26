import { inter, oswald } from "@/app/font";
import WorkoutLibrary from "./WorkoutLibrary";
import Link from "next/link";
import { Iworkout } from "@/type";
import { getWorkouts } from "@/workout";

// const getData = async () => {
//   const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
//     next: {
//       revalidate: 3600,
//     },
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch workouts: ${res.status}`);
//   }

//   return res.json();
// };

const FitlogData = async () => {
  const data = await getWorkouts();

  return (
    <section className="container mx-auto px-5 py-6">
      <h1 className={`${oswald.className} text-4xl text-white`}>THE LIBRARY</h1>

      <p className={`mt-3 ${inter.className} text-[#9CA3AF]`}>
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((workout: Iworkout) => (
          <Link href={`/workout/${workout.id}`} key={workout.id}>
            <WorkoutLibrary workout={workout} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FitlogData;
