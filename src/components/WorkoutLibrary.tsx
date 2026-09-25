import { inter, oswald } from "@/app/font";
import { Iworkout } from "@/type";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { HiMiniFire } from "react-icons/hi2";
import { MdOutlineWatchLater } from "react-icons/md";
interface IWorkoutLibraryProps {
  workout: Iworkout;
}

const WorkoutLibrary = ({ workout }: IWorkoutLibraryProps) => {
  return (
    <section>
      <div className="w-full overflow-hidden rounded-2xl border border-transparent bg-[#191c22] transition-colors duration-200 hover:border-[#c8ff00]">
        <div className="h-[220px] w-full overflow-hidden sm:h-[230px] lg:h-[250px]">
          <Image
            src={workout.image}
            alt={workout.name}
            width={400}
            height={240}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4 sm:p-5 lg:p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className={`rounded-full bg-[#c8ff00] px-3 py-1 text-xs font-medium text-black sm:px-4 sm:text-sm ${inter.className}`}
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2
            className={`mb-3 text-xl font-extrabold uppercase text-white sm:text-2xl ${oswald.className}`}
          >
            {workout.name}
          </h2>

          <p
            className={`mb-5 text-sm text-gray-400 sm:text-base ${inter.className}`}
          >
            {workout.equipment}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white sm:gap-5 sm:text-base">
            <div className="flex items-center gap-1.5">
              <MdOutlineWatchLater className="text-[#c8ff00]" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <HiMiniFire className="text-[#c8ff00]" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaRegStar className="text-[#c8ff00]" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;
