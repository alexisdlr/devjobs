import Header from "@/components/header";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`dark:bg-midnight min-h-full transition-all bg-lightgrey`}>
        <Header />
        {children}
    </main>
  );
}
