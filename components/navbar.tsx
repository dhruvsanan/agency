'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
    scrollToWebsiteDesign: () => void;
    scrollToGraphicDesign: () => void;
    scrollToClients: () => void;
    scrollToFAQ: () => void;
    scrollToPrice: () => void;
  }
  
  const Navbar = ({ 
    scrollToWebsiteDesign, 
    scrollToGraphicDesign, 
    scrollToClients, 
    scrollToFAQ,
    scrollToPrice
  }: NavbarProps) => {

    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = () => {
        setIsDropDownVisible(false);
    }

  return (
    <div>
      <div className="fixed w-full p-2 md:p-4 flex items-center justify-between z-50 bg-black/[0.5] backdrop-blur">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <Link
          href="/"className="hover:text-gray-50" > Home</Link>
          <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50">Website Design</div>
          <div onClick={scrollToGraphicDesign} className="hover:text-gray-50">Graphic Design</div>
          <div onClick={scrollToClients} className="hover:text-gray-50">Clients</div>
          <div onClick={scrollToPrice} className="hover:text-gray-50">Pricing</div>
          <div onClick={scrollToFAQ} className="hover:text-gray-50">FAQ</div>

        </div>

        <div className="flex md:hidden">
            {isDropDownVisible ? (
                // display an x icon when the drop is visible
                <div 
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
                >
                    <X />
                    <DropDownMenu onClose={closeDropDown} />
                    </div>
            ) : (
                <AlignJustify
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
                />
            )}
        </div>

        <div className="hidden md:flex">
          <div className="mr-5">
          <Link
          href="/book" >
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Book Now
              </span>
            </button>
          </Link>
          </div>
          <div>
            <Link 
            href="/contact" 
            className="
            inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50
            ">
                Contact
            </Link>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
