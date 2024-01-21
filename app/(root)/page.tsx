"use client";
import { Suspense, useEffect } from "react";
import Board from "../components/Board";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useThemeStore } from "../store/darkMode";
import BoardSkeleton from "../components/BoardSkeleton";
import { useJobStore } from "../store/jobs";


interface searchParamsProps {
  searchParams: {
    position: string;
  };
}
export default function Home({searchParams}: searchParamsProps) {
  const { darkMode } = useThemeStore();
  const getJobs = useJobStore((state) => state.getJobs);
  const jobs = useJobStore((state) => state.jobs);
  
  useEffect(() => { 
    getJobs(searchParams.position);
  }, [searchParams.position]);
  
  return (
    <main className={`${darkMode ? "dark" : ""} h-full transition`}>
      <div className=" dark:bg-midnight pb-6 bg-lightgrey">
        <Header />
        <div className="relative">
          <Navbar />
        </div>
        <Suspense
          fallback={
            <>
            <div className="hidden lg:block my-20 max-w-5xl mx-auto">
              <BoardSkeleton isDarkMode={darkMode} />
            </div>
            <div className="lg:hidden block my-20 max-w-5xl mx-auto">cargando...</div>
            </>
          }
        >
          <Board jobs={jobs} />
        </Suspense>

        <div className="max-w-5xl pb-6 w-full mx-auto flex items-center justify-center">
          <button className="px-6 py-3 bg-violet rounded-[4px] text-white font-semibold text-sm 2xl:text-base">
            Load More
          </button>
        </div>
      </div>
    </main>
  );
}
