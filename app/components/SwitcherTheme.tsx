"use client";
import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "../store/darkMode";

const SwitcherTheme = () => {
  const { toggleDarkMode } = useThemeStore();
  const { darkMode } = useThemeStore();

  return (
    <div className="flex items-center gap-x-2 lg:gap-x-4">
      <button
        onClick={toggleDarkMode}
        className="hover:opacity-80 p-2 lg:p-3 rounded-full bg-lightgrey bg-opacity-20 transition-all text-white dark:text-darkText"
      >
        {darkMode ? <Sun className="size-4 lg:size-6" /> : <Moon className="size-4 lg:size-6" />}
      </button>
      <span className="text-white font-semibold text-xs lg:text-sm">{darkMode ? "Light Mode": "Dark Mode"}</span>
    </div>
  );
};

export default SwitcherTheme;
