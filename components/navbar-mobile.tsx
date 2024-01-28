"use client";
import { usePathname, useRouter } from "next/navigation";
import qs from "query-string";
import { ChangeEvent, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import useModalStore from "@/store/filter-modal-store";
import FilterModal from "./modal/filter-modal";

const NavbarMobile = () => {
  const onOpen = useModalStore((state) => state.onOpen);
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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
  };

  return (
    <div className="w-full block md:hidden">
      <FilterModal onChange={handleChange} onClick={onClick} />
      <div className="w-full h-full flex lg:hidden items-center justify-start p-6 ">
        <div className="w-full flex items-center text-sm 2xl:text-base">
          <div className="flex gap-x-2 mx-2 items-center">
            <input
              type="text"
              onChange={(e) => setPosition(e.target.value)}
              className="w-full text-sm text-verydarkblue dark:text-lightgrey bg-transparent outline-none border-none pl-2"
              placeholder="Filter by title..."
            />
          </div>
          <div className="ml-auto flex gap-x-2 items-center">
            <button className="active:opacity-80 transition">
              <FaFilter onClick={onOpen} size={24} className="text-darkgray" />
            </button>
            <button
              onClick={onClick}
              className="p-3 rounded-md bg-violet active:opacity-80 transition"
            >
              <FaSearch size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
