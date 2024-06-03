import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "splitr",
  description: "split bills",
};

export default function RootLayout({ children }: 
  Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="p-0 m-0 bg-neutral-200">
          {children}
        </div>
      </body>
    </html>
  );
}
