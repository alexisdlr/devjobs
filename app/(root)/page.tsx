import { Suspense } from "react";
import Board from "../components/Board";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import BoardSkeleton from "../components/BoardSkeleton";


interface searchParamsProps {
  searchParams: {
    position: string;
    location: string
  };
}

export default function Home({searchParams}: searchParamsProps) {
    const { position, location } = searchParams;
    return (
    <main className={` dark:bg-midnight h-full transition-all bg-lightgrey`}>
      <div className=" pb-6 ">
        <Header />
        <div className="relative">
          <Navbar />
        </div>
        <Suspense 
          fallback={
            <>
            <div className="hidden lg:block my-20 max-w-5xl mx-auto">
              <BoardSkeleton isDarkMode={false} />
            </div>
            <div className="lg:hidden block my-20 max-w-5xl mx-auto">cargando...</div>
            </>
          }
        >
          <Board location={location} position={position} />
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
