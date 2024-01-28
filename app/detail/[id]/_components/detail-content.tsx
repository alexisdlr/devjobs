import { MotionDiv } from "@/components/animated/motion-div";
import { JobPosting } from "@/types";
import Link from "next/link";

const DetailContent = ({ data }: { data: JobPosting }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-44 md:mt-36 shadow-lg bg-white rounded-md dark:text-white px-4 md:px-6 lg:px-10 py-10 lg:py-14 dark:bg-verydarkblue w-[80%] lg:max-w-3xl mx-auto"
    >
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
          <p className="text-violet mt-2 text-xs lg:text-sm font-semibold">
            {data.location}
          </p>
        </div>
        <Link
          href={data.apply}
          target="_blank"
          className="w-full text-center lg:w-auto mt-10 lg:mt-0 px-6 py-3 ml-auto bg-violet rounded-[4px] text-white font-semibold text-sm 2xl:text-base hover:opacity-80 transition-all"
        >
          Apply Now
        </Link>
      </div>

      <p className="mt-10 text-xs md:text-sm lg:text-md leading-5 md:leading-normal text-darkgray dark:text-gray">
        {data.description}
      </p>
      <h2 className="text-lg lg:text-2xl mt-10 font-bold dark:text-white">
        Requeriments
      </h2>
      <p className="mt-2 text-xs md:text-sm leading-5 md:leading-normal lg:text-md text-darkgray dark:text-gray">
        {data.requirements.content}
      </p>
      <ul>
        {data.requirements.items.map((item, index) => (
          <li key={index} className="flex items-center gap-x-6 mt-4">
            <div>
              <div className="size-1 relative bg-violet rounded-full" />
            </div>
            <p className="text-xs md:text-sm lg:text-md text-darkgray dark:text-gray">
              {item}
            </p>
          </li>
        ))}
      </ul>
      <h2 className="text-lg lg:text-2xl mt-10 font-bold dark:text-white">
        What You Will Do
      </h2>
      <p className="mt-2 text-xs leading-5 md:text-sm md:leading-normal lg:text-md text-darkgray dark:text-gray">
        {data.role.content}
      </p>

      <ol>
        {data.role.items.map((item, index) => (
          <li key={index} className="flex items-center gap-x-6 mt-4">
            <span className=" text-violet font-semibold text-xs md:text-sm lg:text-md">
              {" "}
              {index + 1}{" "}
            </span>
            <span className="text-xs md:text-sm lg:text-md text-darkgray dark:text-gray">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </MotionDiv>
  );
};

export default DetailContent;
