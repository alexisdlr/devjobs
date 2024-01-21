import { JobPosting } from "@/types";
import JobItem from "./JobItem";

interface BoardProps {
  jobs: JobPosting[];
}

const Board = async ({jobs}: BoardProps) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate loading
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
