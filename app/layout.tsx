import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "👾 ManiRmp - a junior Software engineer",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          (inter.className,
          "flex flex-col w-full  h-screen !bg-bgColor text-textColor relative")
        }
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
