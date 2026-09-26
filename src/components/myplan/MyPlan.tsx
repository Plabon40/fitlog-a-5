"use client";

import { WorkoutContext } from "@/context/ContextProvider";
import { useContext, useState } from "react";
import EmptyState from "./EmptyState";

import SaveDetails from "./SaveDetails";
import TodayDetails from "./TodayDetails";

const MyPlan = () => {
  const { workouts, savedWorkouts } = useContext(WorkoutContext);
  const [tab, setTab] = useState<"today" | "saved">("today");
  let min = 0;
  let cal = 0;
  let smin = 0;
  let scal = 0;

  workouts.forEach((w) => {
    min += w.duration;
    cal += w.caloriesBurned;
  });
  savedWorkouts.forEach((s) => {
    smin += s.duration;
    scal += s.caloriesBurned;
  });

  const handleTabClick = (tab: "today" | "saved") => {
    setTab(tab);
  };

  //   for empty state, check if workouts is empty and return EmptyState component

  //   otherwise, return the MyPlan component with the stats and tabs
  return (
    <section>
      <div className=" mt-7 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#191c22]">
        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Exercises */}
          <div className="px-9 py-6">
            <p className="text-sm text-gray-400">Exercises</p>
            <h2 className="mt-2 text-4xl font-bold text-[#c8ff00]">
              {tab === "today" ? workouts.length : savedWorkouts.length}
            </h2>
          </div>

          {/* Minutes */}
          <div className="px-9 py-6">
            <p className="text-sm text-gray-400">Minutes</p>
            <h2 className="mt-2 text-4xl font-bold text-gray-100">
              {tab === "today" ? min : smin}
            </h2>
          </div>

          {/* Calories */}
          <div className="px-9 py-6">
            <p className="text-sm text-gray-400">Calories</p>
            <h2 className="mt-2 text-4xl font-bold text-gray-100">
              {tab === "today" ? cal : scal}
            </h2>
          </div>
        </div>
      </div>
      {/*  */}
      <div></div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div role="tablist" className="tabs tabs-lift w-fit">
          <a
            role="tab"
            onClick={() => handleTabClick("today")}
            className={`tab ${tab === "today" ? "tab-active" : ""}`}
          >
            Today's Plan
          </a>

          <a
            role="tab"
            onClick={() => handleTabClick("saved")}
            className={`tab ${tab === "saved" ? "tab-active" : ""}`}
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
      <div className="py-6">
        {workouts.length === 0 && savedWorkouts.length === 0 ? (
          <EmptyState />
        ) : (
          <div>
            {tab === "today"
              ? workouts.map((workout) => (
                  <TodayDetails key={workout.id} workout={workout} />
                ))
              : savedWorkouts.map((workout) => (
                  <SaveDetails key={workout.id} workout={workout} />
                ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyPlan;
