import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/theme-provider";

const kumbh_Sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alxs | Devjobs",
  description: "Devjobs is a job board for developers",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> 
      <body className={`${kumbh_Sans.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
