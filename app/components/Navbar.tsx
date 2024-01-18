import { MapPin, Search } from "lucide-react";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <div className="w-[80%] lg:max-w-5xl h-[80px] absolute inset-x-0 bg-white dark:bg-verydarkblue bottom-[-30px] rounded-[6px] mx-auto my-0 flex shadow-lg">
      <NavbarMobile />
      <div className=" w-1/3 h-full hidden lg:flex items-center justify-start border-r p-6 border-gray">
        <div className="w-full flex items-center text-sm 2xl:text-base">
          <span>
            <Search size={24} className="text-violet" />
          </span>
          <input
            type="text"
            className="w-full text-verydarkblue bg-transparent outline-none border-none pl-2"
            placeholder="Filter by name, companie, expertise..."
          />
        </div>
      </div>
      <div className=" w-1/3 h-full hidden lg:flex items-center justify-start border-r p-6 border-gray">
        <div className="w-full flex items-center text-sm 2xl:text-base">
          <span>
            <MapPin size={24} className="text-violet" />
          </span>
          <input
            type="text"
            className="w-full text-verydarkblue bg-transparent outline-none border-none pl-2"
            placeholder="Filter by name location..."
          />
        </div>
      </div>
      <div className=" w-1/3 h-full hidden lg:flex items-center justify-start p-6 pr-0 border-gray">
        <div className="w-full flex items-center justify-start gap-x-4 text-sm 2xl:text-base">
          <div className="flex items-center gap-x-4">
            <input
              type="checkbox"
              className="h-5 w-5 bg-verydarkblue transition duration-150 ease-in-out rounded-[4px]"
            />
            <label className="font-semibold text-sm text-verydarkblue dark:text-white bg-transparent">
              Full Time Only
            </label>
          </div>
          <button className="px-6 py-3 ml-auto mr-6 bg-violet rounded-[4px] text-white font-semibold text-sm 2xl:text-bas">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
