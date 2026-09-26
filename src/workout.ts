import { Iworkout } from "@/type";

export const getWorkouts = async (): Promise<Iworkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch workouts: ${res.status}`);
  }

  return res.json();
};
