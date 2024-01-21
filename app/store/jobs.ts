import { JobPosting } from "@/types";
import { create } from "zustand";
import json from "../../public/data.json";
interface State {
  jobs: JobPosting[];
  getJobs: (position?: string) => Promise<void>;
}

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://https://javascript-quizz-gilt.vercel.app/"
    : "http://localhost:3000/";

export const useJobStore = create<State>()((set) => {
  return {
    jobs: json,
    getJobs: async (position) => {
      try {
        const response = await fetch(`${API_URL}/data.json`);
        const data = await response.json();

        position ? set({ jobs: data.filter((job: JobPosting) => job.position.toLowerCase().includes(position.toLowerCase())) }) :
        set({ jobs: data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  };
});
