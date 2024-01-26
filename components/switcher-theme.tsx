"use client";
import { useThemeStore } from "@/app/store/darkMode";
import { IoMdSunny  } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const SwitcherTheme = () => {
  const { toggleDarkMode } = useThemeStore();
  const { darkMode } = useThemeStore();

  return (
    <div className="flex items-center gap-x-2 lg:gap-x-4">
      <button
        onClick={toggleDarkMode}
        className="hover:opacity-80 p-2 lg:p-3 rounded-full bg-lightgrey bg-opacity-20 transition-all text-white dark:text-darkText"
      >
        {darkMode ? <IoMdSunny className="size-4 lg:size-6" /> : <IoMoon className="size-4 lg:size-6" />}
      </button>
      <span className="text-white font-semibold text-xs md:text-sm lg:text-md">{darkMode ? "Light Mode": "Dark Mode"}</span>
    </div>
  );
};

export default SwitcherTheme;
