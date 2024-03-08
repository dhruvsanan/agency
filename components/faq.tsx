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
      Elevate Web is a cutting-edge web development agency that specializes in creating digital experiences 
      that elevate your brand. Our mission is to craft websites and e-commerce solutions that not only look 
      stunning but also drive business growth and customer engagement.      
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Why us?</AccordionTrigger>
      <AccordionContent>
      Our team at Elevate Web combines design, technology, and marketing expertise to deliver websites that 
      stand out in the digital landscape. We understand that your website is the heart of your online presence, 
      and we&apos;re dedicated to making it beat stronger.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>What about free websites builders?</AccordionTrigger>
      <AccordionContent>
      Free website builders may seem cost-effective, but they often lack in design flexibility, functionality, and 
      scalability. Elevate Web transcends these limitations by offering bespoke solutions that evolve with your business. 
      Unlike DIY platforms, we provide a dedicated engineer to handle all aspects of your website&apos;s creation and maintenance. 
      From design to hosting and domain registration, we manage it all, so you don&apos;t have to worry about the technicalities. 
      For those with the know-how, we&apos;re happy to suggest resources for self-building. But for a hassle-free experience, 
      Elevate Web is your go-to partner.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>Why wouldn't I just hire a full-time developer?</AccordionTrigger>
      <AccordionContent>
      Good question! For starters, the annual cost of a full-time senior-level developer now exceeds $120,000, 
      plus benefits (and good luck finding one available). A full-time developer can be a valuable asset, 
      but may not offer the breadth of skills and services that a specialized agency like Elevate Web brings 
      to the table. We provide a team of experts across various disciplines, ensuring all aspects of your web 
      presence are covered.
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-6">
      <AccordionTrigger>
      Could you tell me more about your support options?
        </AccordionTrigger>
      <AccordionContent>
      Our support goes beyond troubleshooting; we offer strategic advice to help you maximize your site&apos;s performance. 
      From technical assistance to marketing guidance, our team is here for you every step of the way. Just shoot us a mail at&nbsp; 
      <a href="mailto:team@elevateweb.in"
        className='text-blue-500'
        target="_blank">team@elevateweb.in</a>
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