"use client";
import { WorkoutContext } from "@/context/ContextProvider";
import { Iworkout } from "@/type";
import { useContext } from "react";
import { FaBookmark } from "react-icons/fa6";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { toast } from "react-toastify";

const Button = ({ workout }: { workout: Iworkout }) => {
  const { workouts, setWorkouts } = useContext(WorkoutContext);

  const handleWorkout = () => {
    if (workouts.some((w) => w.id === workout.id)) {
      toast.error("Already in your plan.");
      return;
    }
    setWorkouts([...workouts, workout]);
    toast.success("Added to today's plan!");
  };

  return (
    <div className=" mt-5 flex flex-wrap gap-2">
      <button
        onClick={() => handleWorkout()}
        className=" cursor-pointer flex items-center gap-2 rounded-full bg-[#c8ff00] px-4 py-2 text-[12px] font-semibold text-black transition hover:bg-[#d8ff45]"
      >
        <HiOutlineCalendarDays size={16} />
        Add to today&apos;s plan
      </button>

      <button className="flex cursor-pointer items-center gap-2 rounded-full border border-white/60 px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-white/10">
        <FaBookmark size={11} />
        Save for later
      </button>
    </div>
  );
};

export default Button;
