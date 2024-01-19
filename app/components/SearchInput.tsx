"use client";
import qs from "query-string";

import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocation = searchParams.get("location");

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: debouncedValue,
          location: currentLocation,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router, pathname, currentLocation]);
  return (
    <div className="w-full flex items-center text-sm 2xl:text-base">
      <span>
        <FaSearch size={24} className="text-violet" />
      </span>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        className="w-full text-verydarkblue bg-transparent outline-none border-none pl-2 text-xs lg:text-sm"
        placeholder="Filter by name, companie, expertise..."
      />
    </div>
  );
};

export default SearchInput;
