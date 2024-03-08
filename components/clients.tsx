"use client";

import { InfiniteMovingCardsDemo } from "@/app/snippets/infinite-moving-card-snippet";
import Image from "next/image";

const stores = [
  {
    image: "/images/project7.webp",
    quote: "Elevate Web showed us to get started, what to do, and how to do it.",
    name: "Panda Store",
    url:"https://panda-store.up.railway.app",
  },
  {
    image: "/images/chatpdf.webp",
    quote:
      "We had no idea how to get started, but Elevate Web showed us the way. And we were able to create something amazing.",
    name: "PDF Analyser",
    url:"https://chatpdf-dhruv.vercel.app",
  },

  {
    image: "/images/project8.webp",
    quote:
      "The team at Elevate Web is amazing. They helped us create a stunning store that we are proud of.",
    name: "Lead Convert",
    url:"https://ai-lead-convert.vercel.app",
  },
];

const Clients = () => {
  return (
    <>
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
        Clients <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          We have created stunning websites for our clients.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
              <a href={store.url} target="_blank">
                <Image
                  src={store.image}
                  alt="client website"
                  width="400"
                  height="400"
                  className="rounded-lg mx-auto"
                />
                </a>
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <InfiniteMovingCardsDemo />
    </section>
    
    </>
  );
};

export default Clients;
