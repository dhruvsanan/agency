"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import WebsiteDesign from "../components/website-design";
import GraphicDesign from "../components/graphic-design";
import Clients from "../components/clients";
import Freewebsite from "../components/free-website";
import Services from "../components/services";
import Price from "../components/pricing";
import FAQS from "../components/faq";
import { useRef } from "react";
import Footer from "@/components/footer";

export default function Home() {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };


  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const ClientsRef = useRef<HTMLDivElement>(null);
  const PriceRef = useRef<HTMLDivElement>(null);
  const FAQRef = useRef<HTMLDivElement>(null);
  const FreewebsiteRef = useRef<HTMLDivElement>(null);

  
  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", });
  }
  
  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  const scrollToClients = () => {
    ClientsRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  const scrollToPrice = () => {
    PriceRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToFAQ = () => {
    FAQRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToFreewebsite = () => {
    FreewebsiteRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        path=""
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToClients={scrollToClients}
        scrollToPrice={scrollToPrice}
        scrollToFAQ={scrollToFAQ}
      />

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
      <div className="p-8 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl mt-4 pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent 
          bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          Elevate Your Online Presence
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-2xl text-center mx-auto px-4">
        At Elevate Web, We craft visually stunning websites engineered to boost your business and convert visitors into loyal customers
        </p>
        <div className="mt-4 text-3xl font-normal  text-neutral-300 max-w-2xl text-center mx-auto px-4">
        No Investment to Get Started?
        </div>
        <div className="mt-4 text-lg font-normal  text-neutral-300 max-w-2xl text-center mx-auto px-4">
        Jump in by claiming a complimentary website now
        </div>
        <div onClick={scrollToFreewebsite} className="cursor-pointer 
          flex items-center 
          justify-center border border-blue-400 rounded-full w-48 p-2  mx-auto my-6 text-blue-400">Claim Now</div>

        <div className="w-full pt-20">
          <SliderOne />
          </div>
          <Services />
          <div ref={websiteDesignRef}>
        <WebsiteDesign />
        </div>
       
    <div ref={graphicDesignRef}>

        <GraphicDesign />
        </div>

        <div ref={ClientsRef}>
        <Clients />
        </div>        
        
        <div ref={PriceRef}>
        <Price />
        </div>
        <div ref={FreewebsiteRef}>
        <Freewebsite/>
        </div>
        
        <div ref={FAQRef}>
          <FAQS />
          </div>
      </div>
      <Footer/>
    </div>
  );
}