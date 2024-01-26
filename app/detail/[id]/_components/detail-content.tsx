import { JobPosting } from "@/types";
import { MotionDiv } from "../../../../components/motion-div";

const DetailContent = ({ data }: { data: JobPosting }) => {
  return (
    <MotionDiv 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mt-32 shadow-lg bg-white rounded-md dark:text-white px-4 lg:px-10 py-10 lg:py-14 dark:bg-verydarkblue w-[80%] md:w-full lg:max-w-3xl mx-auto">
      <div className="flex gap-x-2 items-center text-xs lg:text-sm">
        <span className="text-darkgray dark:text-gray">{data?.postedAt}</span>
        <div className="w-1 h-1 bg-slate-500 rounded-full" />
        <span className="text-darkgray dark:text-gray">{data?.contract}</span>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div>
          <h1 className="text-lg lg:text-3xl mt-1 font-bold dark:text-white">
            {data?.position}
          </h1>
          <p className="text-violet text-xs lg:text-sm font-semibold">
            {data.location}
          </p>
        </div>
        <button className="w-full lg:w-auto mt-10 lg:mt-0 px-6 py-3 ml-auto bg-violet rounded-[4px] text-white font-semibold text-sm 2xl:text-base">
          Apply Now
        </button>
      </div>

      <p className="mt-10 text-sm lg:text-md text-darkgray dark:text-gray">
        {data.description}
      </p>
      <h2 className="text-lg lg:text-2xl mt-10 font-bold dark:text-white">Requeriments</h2>
      <p className="mt-2 text-sm lg:text-md text-darkgray dark:text-gray">
        {data.requirements.content}
      </p>
    </MotionDiv>
  );
};

export default DetailContent;
