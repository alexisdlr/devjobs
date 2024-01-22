import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={` h-full transition`}>
      <div className=" dark:bg-midnight pb-6 bg-lightgrey">
        <Header />
       
        {children}
      </div>
    </main>
  );
}
