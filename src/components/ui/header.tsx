"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-2 z-20 w-full md:top-4 transition-all duration-300 ${isCollapsed ? 'h-10' : 'h-12'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`relative flex items-center justify-between gap-3 rounded-2xl px-3 transition-all duration-300 ${isCollapsed ? 'bg-transparent h-10 shadow-none' : 'bg-white/90 h-12 shadow-lg shadow-black/[0.03] backdrop-blur-sm'}`}>
          {/* Site branding */}
          <div className="flex flex-1 items-center justify-center sm:justify-start transition-opacity duration-300">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          {/* <ul className={`flex flex-1 items-center justify-end gap-3 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50 rounded-lg py-1 px-4"
              >
                Nuestros servicios
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900 rounded-lg py-1 px-4"
              >
                Quienes Somos
              </Link>
            </li>
            <li>
              <Link
                href="#contacto"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900 rounded-lg py-1 px-4"
              >
                Contáctanos
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
  );
}