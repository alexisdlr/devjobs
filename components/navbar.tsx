"use client";
import NavbarMobile from "./navbar-mobile";
import { HiMiniMapPin } from "react-icons/hi2";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import qs from "query-string";
import { FaSearch } from "react-icons/fa";
import FilterModal from "./modal/filter-modal";

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
    setLocation("");
    setPosition("");
    router.push(url);
  };

  return (
    <div className="w-full max-w-[327px] md:w-full md:max-w-3xl lg:max-w-5xl h-[80px] absolute inset-x-0 bg-white dark:bg-verydarkblue bottom-[-45px] rounded-[6px] mx-auto my-0 flex shadow-lg transition-all">
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
      <div className="w-1/3 h-full hidden md:flex items-center justify-start p-6 pr-0 border-gray">
        <div className="w-full flex items-center justify-start gap-x-4 text-sm 2xl:text-base">
          <div className="flex items-center gap-x-2 lg:gap-x-4">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="checkbox"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative size-6 cursor-pointer appearance-none rounded-md border border-darkgray checked:border-0 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-blue-700 checked:before:bg-midnight hover:before:opacity-10"
                  id="checkbox"
                  defaultChecked={false}
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
            <label className="font-semibold text-xs lg:text-sm text-verydarkblue dark:text-white bg-transparent">
              Full Time Only
            </label>
          </div>
          <button
            className="px-6 py-3 ml-auto mr-6 bg-violet rounded-[4px] text-white font-semibold text-sm 2xl:text-base hover:opacity-80 transition-all"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
