import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link";



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-7xl font-bold text-black">
              Have questions?
            </div>
            <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is Panda?</AccordionTrigger>
      <AccordionContent>
      Panda is a full fledge marketing agency that specializes in branding, web development, app development and digital marketing.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How to start?</AccordionTrigger>
      <AccordionContent>
        You can start by 
        <Link
        href="/contact"
        className="rounded-3xl text-gradient-to-r from-purple-500 to-blue-300 font-bold">
           &nbsp;contacting us </Link>
         for a free trail. We will get back to you within 24 hours.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
    Pricing?
      </AccordionTrigger>
      <AccordionContent>
        You can start with a basic plan to make a minimum vailbe product. 
        We also offer custom tailored solutions for your business. 
        <Link
        href="/contact"
        className="rounded-3xl text-gradient-to-r from-purple-500 to-blue-300 font-bold">
           &nbsp;Contact us </Link> to get a quote.
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
    Support?
        </AccordionTrigger>
      <AccordionContent>
        We offer Monday-Friday support for all our clients.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;