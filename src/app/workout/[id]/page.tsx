import Button from "@/components/button/Button";
import { Iworkout } from "@/type";
import { getWorkouts } from "@/workout";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IworkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

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

const WorkoutDetailsPage = async ({ params }: IworkoutDetailsPageProps) => {
  const { id } = await params;

  const workoutData: Iworkout[] = await getWorkouts();

  const workout = workoutData.find(
    (workout: Iworkout) => workout.id === Number(id),
  );

  if (!workout) {
    notFound();
  }

  return (
    <section className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-7 md:grid-cols-[403px_1fr]">
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            width={400}
            height={700}
            alt={workout.name}
            className="h-[500px] w-full object-cover md:h-[590px]"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="font-condensed text-[28px] font-bold uppercase leading-tight text-white sm:text-[30px]">
            {workout.name}
          </h1>

          <p className="mt-2 max-w-[440px] text-[13px] leading-5 text-gray-300">
            {workout.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c8ff00] px-3 py-1 text-[11px] font-medium text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#191c21]">
            <div className="grid grid-cols-[1fr_1.3fr] border-b border-white/10 px-3 py-3">
              <span className="text-[10px] font-bold uppercase text-white">
                Equipment
              </span>
              <span className="text-[13px] text-white">
                {workout.equipment}
              </span>
            </div>

            <div className="grid grid-cols-[1fr_1.3fr] border-b border-white/10 px-3 py-3">
              <span className="text-[10px] font-bold uppercase text-white">
                Difficulty
              </span>
              <span className="text-[13px] text-white">
                {workout.difficulty}
              </span>
            </div>

            <div className="grid grid-cols-[1fr_1.3fr] border-b border-white/10 px-3 py-3">
              <span className="text-[10px] font-bold uppercase text-white">
                Sets
              </span>
              <span className="text-[13px] text-white">{workout.sets}</span>
            </div>

            <div className="grid grid-cols-[1fr_1.3fr] border-b border-white/10 px-3 py-3">
              <span className="text-[10px] font-bold uppercase text-white">
                Reps
              </span>
              <span className="text-[13px] text-white">{workout.reps}</span>
            </div>

            <div className="grid grid-cols-[1fr_1.3fr] border-b border-white/10 px-3 py-3">
              <span className="text-[10px] font-bold uppercase text-white">
                Duration
              </span>
              <span className="text-[13px] text-white">
                {workout.duration} min
              </span>
            </div>

            <div className="grid grid-cols-[1fr_1.3fr] border-b border-white/10 px-3 py-3">
              <span className="text-[10px] font-bold uppercase text-white">
                Calories
              </span>
              <span className="text-[13px] text-white">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="grid grid-cols-[1fr_1.3fr] px-3 py-3">
              <span className="text-[10px] font-bold uppercase text-white">
                Rating
              </span>
              <span className="text-[13px] text-white">{workout.rating}</span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-[20px] font-bold uppercase text-white">
              Instructions
            </h2>

            <ol className="mt-3 space-y-2">
              {workout.instructions.map((instruction, index) => (
                <li key={index} className="text-[13px] leading-5 text-white">
                  {index + 1}. {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-5">
            <Button workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;
