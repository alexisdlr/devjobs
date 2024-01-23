import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={` dark:bg-midnight min-h-full transition-all bg-lightgrey`}>
      <div className="pb-6">
        <Header />

        {children}
      </div>
    </main>
  );
}
