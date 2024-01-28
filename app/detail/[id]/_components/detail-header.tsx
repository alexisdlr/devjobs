import Logo from "@/components/job-logo";
import { hslToHex } from "@/lib/utils";
import { JobPosting } from "@/types";
import Link from "next/link";

interface HeaderDetailProps {
  data: JobPosting;
}
const HeaderDetail = ({ data }: HeaderDetailProps) => {
  const bgHexColor = hslToHex(data?.logoBackground);

  const divStyle = {
    backgroundColor: `#${bgHexColor}`,
  };
  const logoSrc = data?.logo.split(".");
  const img = require(`../../../../public${logoSrc[1]}.${logoSrc[2]}`).default;

  return (
    <div className="w-[80%] lg:max-w-3xl md:h-[130px] absolute inset-x-0 bg-white dark:bg-verydarkblue bottom-[-150px] md:bottom-[-95px] rounded-[6px] mx-auto my-0 flex pt-3 md:pt-0 flex-col md:flex-row shadow-lg md:overflow-hidden">
      <div className="hidden md:block">
        <Logo src={img.src} style={divStyle} />
      </div>
      <img
        src={img.src}
        alt="te"
        className="md:hidden size-12 absolute left-1/2 transform -translate-x-1/2 -top-[30px]"
      />
      <div className="h-full flex flex-col items-center md:items-start gap-y-2 justify-center p-4 md:p-8 md:pr-0 border-gray">
        <h2 className="text-verydarkblue dark:text-white text-2xl font-semibold first-letter:uppercase">
          {data.company}
        </h2>
        <p className="text-darkgray">{data.company.toLocaleLowerCase()}.com</p>
      </div>
      <div className="md:ml-auto justify-center lg:justify-normal mb-4 flex items-center px-10">
        <Link
          href={data.website}
          target="_blank"
          className="bg-lightviolet/30 text-violet dark:text-white shadow-md font-semibold dark:bg-[#979797]/30  text-xs lg:text-lg px-6 py-3 rounded-[4px] hover:opacity-80 transition-all"
        >
          Company Site
        </Link>
      </div>
    </div>
  );
};

export default HeaderDetail;
