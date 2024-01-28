import { JobPosting } from "@/types";

const DetailFooter = ({ data }: { data: JobPosting }) => {
  return (
    <footer className="w-full h-20 md:h-24 mt-6 bg-verydarkblue flex justify-center items-center">
      <div className="w-full max-w-3xl mx-auto flex justify-center md:justify-between items-center">
        <div className="hidden md:block">
          <h2 className="dark:text-white font-bold text-xl text-verydarkblue">
            {data.position}
          </h2>
          <span>
            <a
              href={data.website}
              target="_blank"
              className="text-darkgray mt-2 text-xs md:text-sm lg:text-md"
            >
              {data.company}
            </a>
          </span>
        </div>
        <div>
          <a
            href={data.apply}
            target="_blank"
            className="w-full text-center lg:w-auto mt-10 lg:mt-0 px-6 py-3 ml-auto bg-violet rounded-[4px] text-white font-semibold text-sm 2xl:text-base hover:opacity-80 transition-all"
          >
            Apply Now
          </a>
        </div>
      </div>
    </footer>
  );
};

export default DetailFooter;
