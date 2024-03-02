"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/navbar";

const Book = () => {
  return (
    <>
      <div className="flex flex-col   w-full  h-screen bg-black/[0.96]  bg-grid-white/[0.02]   ">
        <Navbar
          scrollToWebsiteDesign={() => {}}
          scrollToGraphicDesign={() => {}}
          scrollToClients={() => {}}
          scrollToFAQ={() => {}}
          scrollToPrice={() => {}}
        />
        <div className="text-4xl mt-20 pt-3 pb-3 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Book a meeting
        </div>
        {/* TODO change meeting link */}
        <InlineWidget url="https://calendly.com/dhruvsanan2001/15min" />
      </div>
    </>
  );
};

export default Book;
