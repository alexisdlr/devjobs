import { Search } from "lucide-react";

const NavbarMobile = () => {
  return (
    <div className="w-full block lg:hidden">
      <div className="w-full h-full flex lg:hidden items-center justify-start p-6 ">
        <div className="w-full flex items-center text-sm 2xl:text-base">
          <input
            type="text"
            className="w-full text-sm text-verydarkblue bg-transparent outline-none border-none pl-2"
            placeholder="Filter by title..."
          />
          <button className="p-3 rounded-md bg-violet">
            <Search size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
