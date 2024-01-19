import { JobPosting } from "@/types";
import { useJobStore } from "../store/jobs";
import JobItem from "./JobItem";
import { fetchData } from "../getData";

const Board = async () => {
  const jobs = await fetchData();
  const numJobsToShow = 12; 
  const jobsToShow = jobs.slice(0, numJobsToShow);
  return (
    <div className="my-20 w-full h-full lg:max-w-5xl mx-auto grid gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {jobsToShow.map((job: JobPosting) => (
        <JobItem key={job.id} data={job} />
      ))}
    </div>
  );
};

export default Board;
