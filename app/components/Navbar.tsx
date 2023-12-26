"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  return (
    <header
      className="fixed items-center justify-center md:justify-between inset-x-0 top-0 z-30 w-full max-w-screen-sm border border-slate-800
      bg:neutral-200
     dark:bg-[#101829] dark:text-white py-1.5 backdrop-blur-md md:top-6 rounded-xl
     hover:shadow-custom-shadow delay-100 duration-200
     mx-auto
     "
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a
              aria-current="page"
              className="flex items-center hover:bg-primary hover:backdrop-blur-md px-4 hover:px-4 py-2 rounded-md delay-100 duration-200"
              href="/"
            >
              <p className="text-lg">🧑🏻‍💻Mani Ramezanpour</p>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              href="/about"
              className="inline-block  px-4 py-2 text-md font-medium text-neutral-200 transition-all hover:bg-primary hover:backdrop-blur-md hover:px-4 rounded-md delay-100 duration-200 hover:text-darkColor"
            >
              About
            </Link>
            <a
              className="inline-block  px-4 py-2 text-md font-medium text-neutral-200 transition-all hover:bg-primary hover:backdrop-blur-md hover:px-4 rounded-md delay-100 duration-200 hover:text-darkColor"
              href="#"
            >
              GitHub
            </a>
            <button
              className="px-2 py-1 hover:bg-primary hover:backdrop-blur-md hover:px-2 rounded-md delay-100 duration-200 hover:text-bgColor"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
