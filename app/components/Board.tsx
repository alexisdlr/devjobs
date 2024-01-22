import { JobPosting } from "@/types";
import JobItem from "./JobItem";
import { getJobsByParams } from "@/actions/getJobsByParams";

const Board = async ({
  location,
  position,
}: {
  location?: string;
  position?: string;
}) => {
  const jobs = await getJobsByParams({ position, location });

  const numJobsToShow = 12;
  const jobsToShow = jobs.slice(0, numJobsToShow);
  return (
    <>
      {jobsToShow.length > 0 ? (
        <div className="my-20 w-full h-full lg:max-w-5xl mx-auto grid gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {jobsToShow.map((job: JobPosting) => (
            <JobItem key={job.id} data={job} />
          ))}
        </div>
      ) : (
        <div className="w-full my-20 h-full flex items-center justify-center lg:max-w-5xl mx-auto">
          <h2 className="text-verydarkblue text-center dark:text-white text-2xl lg:text-4xl font-semibold">
            No results found...
          </h2>
        </div>
      )}
    </>
  );
};

export default Board;
