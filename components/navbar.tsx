"use client";
import NavbarMobile from "./navbar-mobile";
import { HiMiniMapPin } from "react-icons/hi2";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import qs from "query-string";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          location: location,
          position: position,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="w-[80%] md:w-full md:max-w-3xl lg:max-w-5xl h-[80px] absolute inset-x-0 bg-white dark:bg-verydarkblue bottom-[-30px] rounded-[6px] mx-auto my-0 flex shadow-lg transition-all">
      <NavbarMobile />
      <div className=" w-1/3 h-full hidden md:flex items-center justify-start border-r p-6 border-gray">
        <div className="w-full flex items-center text-sm 2xl:text-base">
          <span>
            <FaSearch size={24} className="text-violet" />
          </span>
          <input
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            className="w-full text-verydarkblue dark:text-white bg-transparent outline-none border-none pl-2 text-xs lg:text-sm"
            placeholder="Filter by name, companie, expertise..."
          />
        </div>
      </div>
      <div className=" w-1/3 h-full hidden md:flex items-center justify-start border-r p-6 border-gray">
        <div className="w-full flex items-center text-sm 2xl:text-base">
          <span>
            <HiMiniMapPin size={24} className="text-violet" />
          </span>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            className="w-full dark:text-white text-verydarkblue bg-transparent outline-none border-none pl-2 text-xs lg:text-sm"
            placeholder="Filter by location..."
          />
        </div>
      </div>
      <div className=" w-1/3 h-full hidden md:flex items-center justify-start p-6 pr-0 border-gray">
        <div className="w-full flex items-center justify-start gap-x-4 text-sm 2xl:text-base">
          <div className="flex items-center gap-x-2 lg:gap-x-4">
            <input
              type="checkbox"
              className="h-5 w-5 bg-verydarkblue transition duration-150 ease-in-out rounded-[4px]"
            />
            <label className="font-semibold text-xs lg:text-sm text-verydarkblue dark:text-white bg-transparent">
              Full Time Only
            </label>
          </div>
          <button
            className="px-6 py-3 ml-auto mr-6 bg-violet rounded-[4px] text-white font-semibold text-sm 2xl:text-base"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
