import { WorkoutContext } from "@/context/ContextProvider";
import { Iworkout } from "@/type";
import Link from "next/link";
import { useContext } from "react";

import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

const ButtonPlan = ({ workout }: { workout: Iworkout }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const handlemarkAsDone = (workout: Iworkout) => {
    const updatedWorkouts = workouts.filter((w) => w.id !== workout.id);

    setWorkouts(updatedWorkouts);

    toast.success("Workout Logged Successfully");
  };
  const handleremove = (workout: Iworkout) => {
    const updatedWorkouts = workouts.filter((w) => w.id !== workout.id);

    setWorkouts(updatedWorkouts);

    toast.success("Removed from today's plan");
  };
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:items-center">
      <Link href={`/workout/${workout.id}`}>
        <button className=" cursor-pointer rounded-full border border-gray-300 px-5 py-3 font-semibold hover:bg-white hover:text-black">
          View Details
        </button>
      </Link>

      <button
        onClick={() => handlemarkAsDone(workout)}
        className=" cursor-pointer flex items-center justify-center gap-2 rounded-full bg-[#C2F800] px-5 py-3 font-medium text-black hover:bg-[#b8ed00]"
      >
        <FaCheck />
        Mark as Done
      </button>

      <button
        onClick={() => handleremove(workout)}
        aria-label="Remove workout"
        className="self-center p-2 text-xl text-gray-300 hover:text-white"
      >
        <FaXmark />
      </button>
    </div>
  );
};

export default ButtonPlan;
