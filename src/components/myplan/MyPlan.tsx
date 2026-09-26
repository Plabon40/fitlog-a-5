"use client";

import { WorkoutContext } from "@/context/ContextProvider";
import { Iworkout } from "@/type";
import { useContext } from "react";
import EmptyState from "./EmptyState";

const MyPlan = () => {
  const { workouts, savedWorkouts } = useContext(WorkoutContext);
  let min = 0;
  let cal = 0;
  {
    workouts.map((w) => {
      min = min + w.duration;
      cal = cal + w.caloriesBurned;
    });
  }
  const handleTabClick = (tab: "today" | "saved") => {
    if (tab === "today") {
    }
  };
  //   for empty state, check if workouts is empty and return EmptyState component
  {
    if (workouts.length === 0) {
      return <EmptyState />;
    }
  }
  //   otherwise, return the MyPlan component with the stats and tabs
  return (
    <section>
      <div className=" mt-7 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#191c22]">
        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Exercises */}
          <div className="px-9 py-6">
            <p className="text-sm text-gray-400">Exercises</p>
            <h2 className="mt-2 text-4xl font-bold text-[#c8ff00]">
              {workouts.length}
            </h2>
          </div>

          {/* Minutes */}
          <div className="px-9 py-6">
            <p className="text-sm text-gray-400">Minutes</p>
            <h2 className="mt-2 text-4xl font-bold text-gray-100">{min}</h2>
          </div>

          {/* Calories */}
          <div className="px-9 py-6">
            <p className="text-sm text-gray-400">Calories</p>
            <h2 className="mt-2 text-4xl font-bold text-gray-100">{cal}</h2>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div role="tablist" className="tabs tabs-lift w-fit">
          <a role="tab" onClick={() => handleTabClick("today")} className="tab">
            Today's Plan
          </a>

          <a
            role="tab"
            onClick={() => handleTabClick("saved")}
            className="tab tab-active"
          >
            Saved
          </a>
        </div>

        <div className="w-full sm:w-[220px] md:w-[260px] lg:w-[300px]">
          <p className="mb-1 text-sm text-gray-400">Sort by</p>

          <select
            defaultValue="Duration"
            className="select select-ghost w-full border border-white"
          >
            <option>Duration</option>
            <option>Calories</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default MyPlan;
