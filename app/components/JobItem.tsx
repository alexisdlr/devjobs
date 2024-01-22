import { JobPosting } from "@/types";
import Link from "next/link";
interface JobItemProps {
  data: JobPosting;
}

const JobItem = ({ data }: JobItemProps) => {
  return (
    <div className="relative bg-white shadow-md dark:bg-verydarkblue rounded-lg mt-10 w-full h-52 max-w-[350px]">
      <img
        src={data.logo}
        alt={data.position}
        loading="lazy"
        className={`max-w-[50px] max-h-[50px] absolute -top-6 left-7`}
      />
      <div className="px-7 mt-10">
        <div className="flex items-center justify-start gap-x-2 text-sm 2xl:text-base">
          <span className="text-darkgray">{data.postedAt}</span>
          <div className="w-1 h-1 bg-slate-500 rounded-full" />
          <span className="text-darkgray">{data.contract}</span>
        </div>
        <Link href={`/detail/${data.id}`} className="text-verydarkblue dark:text-white font-bold text-xl my-2">
          {data.position}
        </Link>
        <div className="flex flex-col text-sm 2xl:text-base">
          <span className="text-darkgray">{data.company}</span>
          
          <span className="text-violet font-semibold mt-10">{data.location}</span>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
