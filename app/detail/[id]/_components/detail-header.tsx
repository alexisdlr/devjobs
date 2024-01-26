import Logo from "@/components/job-logo";
import { hslToHex } from "@/lib/utils";
import { JobPosting } from "@/types";

interface HeaderDetailProps {
  data: JobPosting;
}
const HeaderDetail = ({ data }: HeaderDetailProps) => {
  const bgHexColor = hslToHex(data?.logoBackground);

  const divStyle = {
    backgroundColor: `#${bgHexColor}`,
  };
  const logoSrc = data?.logo.split(".");

  const url = `@`;
  const img = require(`../../../../public${logoSrc[1]}.${logoSrc[2]}`).default;

  return (
    <div className="w-[80%] md:w-full lg:max-w-3xl h-[130px] absolute inset-x-0 bg-white dark:bg-verydarkblue bottom-[-95px] rounded-[6px] mx-auto my-0 flex shadow-lg overflow-hidden">
      <Logo src={img.src} style={divStyle} />
      <div className="h-full flex items-center justify-start p-6 pr-0 border-gray">
        <h2 className="text-verydarkblue dark:text-white text-2xl font-semibold">
          {data.company.toLowerCase()}
        </h2>
      </div>
    </div>
  );
};

export default HeaderDetail;
