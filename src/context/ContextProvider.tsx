"use client";

import { Iworkout } from "@/type";
import { ReactNode, useEffect, useState } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);

  // Load localStorage after hydration
  useEffect(() => {
    const storedWorkouts = localStorage.getItem("workouts");
    const storedSavedWorkouts = localStorage.getItem("savedWorkouts");

    if (storedWorkouts) {
      setWorkouts(JSON.parse(storedWorkouts));
    }

    if (storedSavedWorkouts) {
      setSavedWorkouts(JSON.parse(storedSavedWorkouts));
    }

    setIsLoaded(true);
  }, []);

  // Save only after localStorage has been loaded
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("savedWorkouts", JSON.stringify(savedWorkouts));
  }, [savedWorkouts, isLoaded]);

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
