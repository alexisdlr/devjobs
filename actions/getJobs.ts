import { JobPosting } from "@/types";

type GetJobsProps = {
  position?: string;
  location?: string;
  fulltime?: boolean;
};
export const getJobs = async ({position, location, fulltime}: GetJobsProps) => {
  try {
    const API_URL = process.env.NODE_ENV === "production"
      ? "https://devjobs-dun.vercel.app/"
      : "http://localhost:3000/";
    
    await new Promise(resolve => setTimeout(resolve, 3000)); 

    const response = await fetch(`${API_URL}/data.json`);
    const data = await response.json();

    if (fulltime) {
      const filteredData = data.filter((job: JobPosting) => job.contract === "Full Time");
      return filteredData;
    }
    if (position && location) {
      const filteredData = data.filter((job: JobPosting) => job.position.toLowerCase().includes(position.toLowerCase()) && job.location.toLowerCase().includes(location.toLowerCase()))
      return filteredData;
    }
    if (position) {
      const filteredData = data.filter((job: JobPosting) => job.position.toLowerCase().includes(position.toLowerCase()))
      return filteredData;
    }
    if (location) {
      const filteredData = data.filter((job: JobPosting) => job.location.toLowerCase().includes(location.toLowerCase()))
      return filteredData;
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
