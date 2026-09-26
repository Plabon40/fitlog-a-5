import { WorkoutContext } from "@/context/ContextProvider";
import { Iworkout } from "@/type";
import Link from "next/link";
import { useContext } from "react";

import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

const ButtonSaved = ({ workout }: { workout: Iworkout }) => {
  const { savedWorkouts,  setSavedWorkouts } =
    useContext(WorkoutContext);

  const handleremove = (workout: Iworkout) => {

    const updatedSavedWorkouts = savedWorkouts.filter(
      (w) => w.id !== workout.id,
    );

    setSavedWorkouts(updatedSavedWorkouts);
    toast.success("Removed from saved list");
  };

  return (
    <div>
      <Link href={`/workout/${workout.id}`}>
        <button className=" cursor-pointer rounded-full border border-gray-300 px-5 py-3 font-semibold hover:bg-white hover:text-black">
          View Details
        </button>
      </Link>

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

export default ButtonSaved;
