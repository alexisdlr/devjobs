import { JobPosting } from "@/types";
import { create } from "zustand";
import json from "../../public/data.json";
interface State {
  jobs: JobPosting[];
}

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://https://javascript-quizz-gilt.vercel.app/"
    : "http://localhost:3000/";

export const useJobStore = create<State>()((set) => {
  return {
    jobs: json,
  };
});
