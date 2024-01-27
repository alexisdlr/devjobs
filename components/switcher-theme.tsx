"use client";
import { useThemeStore } from "@/store/darkMode";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const SwitcherTheme = () => {
  const { toggleDarkMode } = useThemeStore();
  const { darkMode } = useThemeStore();

  return (
    <div className="flex items-center gap-x-2 text-white dark:text-darkText">
      <IoMdSunny className="size-4 lg:size-5" />

      <label className="relative inline-flex cursor-pointer items-center">
        <input
          onClick={toggleDarkMode}
          id="switch"
          type="checkbox"
          className="peer sr-only"
        />
        <label htmlFor="switch" className="hidden"></label>
        <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-violet after:transition-all after:content-['']  peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
      </label>
      <IoMoon className="size-4 lg:size-5" />
    </div>
  );
};

export default SwitcherTheme;
