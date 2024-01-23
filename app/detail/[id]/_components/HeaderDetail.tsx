import { hslToHex } from "@/lib/utils";
import { JobPosting } from "@/types";
import Image from "next/image";

interface HeaderDetailProps {
  data: JobPosting;
}
const HeaderDetail = ({ data }: HeaderDetailProps) => {
  const bgHexColor = hslToHex(data?.logoBackground);

  const divStyle = {
    backgroundColor: `#${bgHexColor}`,
  };
  return (
    <div className="w-[80%] md:w-full md:max-w-3xl h-[140px] absolute inset-x-0 bg-white dark:bg-verydarkblue bottom-[-50px] rounded-[6px] mx-auto my-0 flex shadow-lg overflow-hidden">
      <div
        className="size-36 flex items-center justify-center"
        style={divStyle}
      >
        <img src={data.logo} alt="logo for company" />
      </div>

      <div className=" h-full flex items-center justify-start p-6 pr-0 border-gray">
        <h2 className="text-verydarkblue dark:text-white text-2xl font-semibold">
          {data.company.toLowerCase()}
        </h2>
      </div>
    </div>
  );
};

export default HeaderDetail;
