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
            <div className="text-2xl md:text-5xl mb-1 font-bold text-black">
              Have questions?
            </div>
            <div className="  font-semibold text-2xl md:text-3xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is Elevate Web?</AccordionTrigger>
      <AccordionContent>
      Elevate Web is a full fledge marketing agency that specializes in branding, web design and development.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Why us?</AccordionTrigger>
      <AccordionContent>
        We have a team of developers to help you out. 
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>What about free websites builders?</AccordionTrigger>
      <AccordionContent>
      Unlike other free website builders, we provide you with a dedicated engineer who will do the work for you. 
      You don&apos;t have to start from scratch or worry about the technical aspects of building a website. 
      You just tell us what you need, and we will handle it for you. 
      Our engineer will take care of everything from web design and development to hosting and domain registration. 
      If you choose to use other free website builders, you will have to do all these things yourself. 
      You will need to have the knowledge and skills of setting up a domain, SSL, security, and deployment. 
      If you already have these skills, we can recommend you some awesome resources that will help you build your own website. 
      But if you want to save time and hassle, we are here to help you.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>Why wouldn't I just hire a full-time developer?</AccordionTrigger>
      <AccordionContent>
      Good question! For starters, the annual cost of a full-time senior-level developer now exceeds $120,000, 
      plus benefits (and good luck finding one available). Aside from that, you may not always have enough work 
      to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.
      So the monthly plan is cost-effective, especially for projects with variable workloads.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger>
    Pricing?
      </AccordionTrigger>
      <AccordionContent>
        You can start with a basic plan to make a minimum viable product. 
        We also offer custom tailored solutions for your business. 
        <Link
        href="/contact"
        className="rounded-3xl text-gradient-to-r from-purple-500 to-blue-300 font-bold">
           &nbsp;Contact us </Link> to get a quote.
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-6">
      <AccordionTrigger>
      Could you tell me more about your support options?
        </AccordionTrigger>
      <AccordionContent>
        We offer Monday-Friday support for all our clients.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-7">
      <AccordionTrigger>
      How can your service start at $0? What&apos;s the catch?
        </AccordionTrigger>
      <AccordionContent>
      While the initial website setup is offered at no upfront cost, it's important to clarify the scope of this offering.
      The complimentary tier focuses on providing immediate support to businesses impacted by Google website shutdowns. 
      During these challenging times, we aim to offer a basic foundation to get your online presence back up and running swiftly.

      This introductory tier includes a standard template and a generic domain to ensure a functional website exists. 
      However, it's important to understand that extensive customization, advanced features, and a premium domain name 
      require an upgrade to one of our paid plans.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-8">
      <AccordionTrigger>
      Are there any refunds if I don&apos;t like the service?
        </AccordionTrigger>
      <AccordionContent>
      Due to the high quality nature of the work, there will be no refunds issued. Also, we only charge 30% of the total fee in advance, and the remaining is payable only after you approve the work.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;