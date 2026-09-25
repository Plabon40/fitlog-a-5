"use client";

import { Iworkout } from "@/type";
import { ReactNode, useState } from "react";
import { createContext } from "react";

type TWorkoutContext = {
  workouts: Iworkout[];
  setWorkouts: React.Dispatch<React.SetStateAction<Iworkout[]>>;
  savedWorkouts: Iworkout[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<Iworkout[]>>;
};

export const WorkoutContext = createContext<TWorkoutContext>({
  workouts: [],
  setWorkouts: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
});
const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [workouts, setWorkouts] = useState<Iworkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Iworkout[]>([]);

  const shared = {
    workouts,
    setWorkouts,
    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={shared}>{children}</WorkoutContext.Provider>
  );
};

export default ContextProvider;
