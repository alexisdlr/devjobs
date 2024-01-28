import { FaFilter, FaSearch } from "react-icons/fa";

const NavbarMobile = () => {
  return (
    <div className="w-full block md:hidden">
      <div className="w-full h-full flex lg:hidden items-center justify-start p-6 ">
        <div className="w-full flex items-center text-sm 2xl:text-base">
          <div className="flex gap-x-2 mx-2 items-center">
            <input
              type="text"
              className="w-full text-sm text-verydarkblue dark:text-lightgrey bg-transparent outline-none border-none pl-2"
              placeholder="Filter by title..."
            />
          </div>
          <div className="ml-auto flex gap-x-2 items-center">
            <FaFilter size={24} className="text-darkgray" />
            <button className="p-3 rounded-md bg-violet">
              <FaSearch size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
