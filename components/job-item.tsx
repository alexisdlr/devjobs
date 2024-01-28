import { JobPosting } from "@/types";
import Link from "next/link";
import { MotionDiv } from "./animated/motion-div";

interface JobItemProps {
  data: JobPosting;
}

const JobItem = ({ data }: JobItemProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-white shadow-md dark:bg-verydarkblue rounded-lg w-full h-52 
    max-w-[300px]	
    lg:max-w-[350px]"
    >
      <img
        src={data.logo}
        alt={data.position}
        loading="lazy"
        className={`max-w-[50px] max-h-[50px] absolute -top-6 left-7`}
      />
      <div className="px-7 mt-10">
        <div className="flex items-center justify-start gap-x-2 text-sm 2xl:text-base">
          <span className="text-darkgray dark:text-gray">{data.postedAt}</span>
          <div className="w-1 h-1 bg-slate-500 rounded-full" />
          <span className="text-darkgray dark:text-gray">{data.contract}</span>
        </div>
        <Link
          href={`/detail/${data.id}`}
          className="mt-2 text-verydarkblue hover:text-darkgray dark:text-white dark:hover:text-darkgray font-bold text-lg lg:text-xl my-2 transition-all "
        >
          {data.position}
        </Link>
        <div className="mt-2 flex flex-col text-sm 2xl:text-base">
          <span className="text-darkgray">{data.company}</span>

          <span className="text-violet font-semibold mt-10">
            {data.location}
          </span>
        </div>
      </div>
    </MotionDiv>
  );
};

export default JobItem;
