import { Suspense } from "react";
import BoardSkeleton from "./components/skeleton";
import Loader from "./components/loader";
import Header from "./components/header";
import JobsList from "./components/jobs-list";
import Navbar from "./components/navbar";

interface searchParamsProps {
  searchParams: {
    position: string;
    location: string;
  };
}

export default function Home({ searchParams }: searchParamsProps) {
  const { position, location } = searchParams;
  return (
    <main
      className={` dark:bg-midnight min-h-full transition-all bg-lightgrey`}
    >
      <div className=" pb-6 ">
        <Header />
        <div className="relative">
          <Navbar />
        </div>
        <Suspense
          fallback={
            <>
              <div className="hidden lg:block my-10 max-w-5xl mx-auto">
                <BoardSkeleton />
              </div>
              <div className="lg:hidden block w-full my-20 max-w-5xl mx-auto">
                <Loader />
              </div>
            </>
          }
        >
          <JobsList location={location} position={position} />
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
