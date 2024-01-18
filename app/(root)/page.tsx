"use client";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useThemeStore } from "../store/darkMode";

export default function Home() {
  const { darkMode } = useThemeStore();
  return (
    <main className={`${darkMode ? "dark" : ""} h-full transition`}>
      <div className="h-full dark:bg-midnight bg-lightgrey">
        <Header />
        <div className="relative">
          <Navbar />
        </div>
      </div>
    </main>
  );
}
