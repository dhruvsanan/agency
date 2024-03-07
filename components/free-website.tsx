"use client";
import Image from "@/node_modules/next/image";
import React from "react";
 
const Freewebsite=() => {
  return (
    <div>
        <div className="p-8 mx-auto relative z-10 w-full  px-2">
        <div
          className="text-2xl pb-5 md:text-4xl px-6 text-center mx-6 bg-clip-text text-transparent 
          bg-gradient-to-b from-neutral-50 justify-center
              to bg-neutral-400 bg-opacity-50" 
        >
            <div className="align-center">
            <Image
                src="/images/google.webp"
                className="rounded-3xl mx-auto"
                alt="Website development"
                width={666} // Replace with desired width in pixels
                height={444} // Replace with desired height in pixels (optional)
                layout="intrinsic" // Adjust layout as needed (e.g., "fill", "fixed")
                />
                </div>
                <div className="text-blue-500 pt-2 text-sm">
                    <a href="https://support.google.com/business/answer/14368911?hl=en">Article Link</a></div>
              <br></br>
          We understand your business will be affected by google shutting down the service and changes like these can be unexpected. 
          But we are committed to help you through this transition.
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-4xl text-center mx-auto px-2">
        To empower local businesses with a strong online presence, we are offering a complimentary website. 
        This initiative ensures that you can maintain your digital footprint at no cost. <br></br>
        <br></br>
        
          <a href="https://forms.gle/ZxkmGvF1QTWmejfV8" target="_blank">
          <button 
          className="px-6 py-2 w-[250px] font-medium bg-blue-500 rounded-xl text-destructive-foreground hover:bg-blue-500/90 text-white transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Claim Now
      </button>
      </a>
      <br></br>
      <br></br>
        <span className="font-bold">**This exclusive offer is available to business owners only.**</span>
        </p>

      
    </div>
    </div>
  );
}
export default Freewebsite;