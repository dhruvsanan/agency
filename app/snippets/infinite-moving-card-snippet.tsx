"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
    "Elevate Web's custom site design led to a surge in our store's traffic and sales, showcasing our products brilliantly.",
    name: "Shresth Kapoor",
    title: "Bon Chic",
  },
  {
    quote:
      "Our restaurant's client base and revenue grew significantly after Elevate Web's website makeover, enhancing our online appeal.",
    name: "Sonu Sanan",
    title: "SSK Electricals",
  },
  {
    quote: "Post Elevate Web's revamp, our cleaning agency saw a notable increase in clientele and sales, reflecting our service excellence online.",
    name: "Steve Marcus",
    title: "Kaya Agencies",
  },
  {
    quote:
      "Our accounting firm's new website by Elevate Web attracted more clients and boosted our professional image, leading to increased sales.",
    name: "Jane Marshal",
    title: "Accountant",
  },
  {
    quote:
      "Thanks to Elevate Web, our car service's online presence drove up customer visits and sales, mirroring our shop's efficiency.",
    name: "Herman Austen",
    title: "Car Mechanic",
  },
];
