"use client";

import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from '@/components/ui/tooltip'
  import { cn } from '@/lib/utils'
  import {
    HelpCircle,
    Minus,
  } from 'lucide-react'

const plans = [
  {
    index: 0,
    name: "Basic",
    features: [
        {
            text: 'Fully Developed website',
          },
          {
            text: 'Single page',
          },
          {
            text: 'Design + Development + Hosting + Domain',
          },
          {
            text: '2-4 days turnaround time',
          },
          {
            text: 'Google Maps Support',
            footnote:
              'google map is integrated in website ',
              negative: true,
          },
          {
            text: 'Attractive features',
            footnote:
              'Cool customized animations',
              negative: true,
          },
          {
            text: 'SEO Optimization',
            footnote:
              'Mobile friendly website. Google increases SEO for Mobile friendly websites',
              negative: true,
          },
          {
            text: 'Contact Us Form',
            footnote:"A fully functioning contact form",
            negative: true,
          },
        {
            text: 'Online Booking Feature',
            negative: true,
          },
        {
            text: 'Priority support',
            negative:true
          },
      ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Premium",
    features: [
      {
        text: 'Fully responsive on all screens',
        footnote:
          'Looks good on mobile and laptop',
      },
      {
        text: 'Multiple pages',
      },
      {
        text: 'Design + Development + Hosting + Domain',
      },
      {
        text: '5-7 days turnaround time',
      },
      {
        text: 'Google Maps Support',
        footnote:
          'google map is integrated in website ',
      },
      {
        text: '5 attractive features',
        footnote:
          'Cool customized animations',
      },
      {
        text: 'SEO Optimization',
        footnote:
          'Mobile friendly website. Google increases SEO for Mobile friendly websites',
      },
      {
        text: 'Contact Us Form',
        footnote:"A fully functioning contact form",
      },
    {
        text: 'Online Booking Feature',
        negative: true,
      },
    {
        text: 'Priority support',
        negative:true
      },
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Enterprise",
    feature: "Contact Us",
    features: [
        {
          text: 'Fully responsive on all screens',
          footnote:
            'Looks good on mobile and laptop',
        },{
            text: 'Multiple pages',
          },
          {
            text: 'Design + Development + Hosting + Domain',
          },
          {
            text: '7-10 days turnaround time',
          },
          {
            text: 'Google Maps Support',
            footnote:
              'google map is integrated in website ',
          },
          {
            text: 'Attractive features',
            footnote:
              'Unlimited Cool customized animations',
          },
          {
            text: 'SEO Optimization',
            footnote:
              'Mobile friendly website. Google increases SEO for Mobile friendly websites',
          },
          {
            text: 'Contact Us Form',
            footnote:"A fully functioning contact form",
          },
        {
            text: 'Online Booking Feature',
          },
        {
            text: 'Priority support',
            negative:false
          },
      ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
    button: "Contact Us",
  },
];

const Price = () => {
    return ( 
      <div className="w-full  md:items-center md:justify-center
       bg-black/[0.96] antialiased 
       bg-grid-white/[0.02] relative overflow-hidden">
  
  <div className="flex items-center justify-center flex-col   ">
            <div className="text-5xl mt-20 pt-3 pb-5 md:pb-10 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
              Simple Pricing <br /> Choose your plan
            </div>
            <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20  items-start ">
            <TooltipProvider>
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={cn("h-full flex flex-col justify-between rounded-3xl px-6",{
                    'border-2 border-blue-600 shadow-blue-200':
                    plan.name === 'Premium',
                    'border border-gray-200':
                    plan.name !== 'Premium',
                  }
                )}>
                    {plan.name === 'Premium' && (
                      <div className='absolute left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm text-center font-medium text-white'>
                        Best Seller
                      </div>
                    )}
                  <div className={plan.style}>
                    <div className="text-4xl flex  items-center font-medium">
                      {plan.name}
                    </div>
                    <div className="py-6">{plan.description}</div>
                    <ul className='my-10 space-y-5 px-8'>
                        {plan.features.map(
                          ({ text, footnote, negative }) => (
                            <li
                              key={text}
                              className='flex space-x-5'>
                              <div className='flex-shrink-0'>
                                {negative ? (
                                  <Minus className='h-6 w-6 text-gray-300' />
                                ) : (
                                  <PiCheckCircleFill className='h-6 w-6 text-green-600' />
                                )}
                              </div>
                              {footnote ? (
                                <div className='flex items-center space-x-1'>
                                  <p
                                  className={negative ? cn('text-gray-600') : cn('text-gray-400')}>
                                    {text}
                                  </p>
                                  <Tooltip
                                    delayDuration={300}>
                                    <TooltipTrigger className='cursor-default ml-1.5'>
                                      <HelpCircle className='h-4 w-4 text-zinc-500' />
                                    </TooltipTrigger>
                                    <TooltipContent className='w-80 p-2'>
                                      {footnote}
                                    </TooltipContent>
                                  </Tooltip>
                                </div>
                              ) : (
                                <p
                                  className={negative ? cn('text-gray-600') : cn('text-gray-400')}>
                                    {text}
                                  </p>
                              )}
                            </li>
                          )
                        )}
                      </ul>
                  </div>
  
                  <div className={plan.button}>
                    {index === 0 && (
                      <Link
                        href="https://buy.stripe.com/test_eVadQZ45x9yM72UdQQ"
                        className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                      >
                        Buy Now
                      </Link>
                    )}
                      {index === 1 && (
                        <Link
                          href="https://buy.stripe.com/test_8wM5kt1Xp26kcneaEF"
                          className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300" 
                        >
                          Buy Now
                          </Link>
                      )}
                      {index === 2 && (
  
                            <Link
                            href="/contact"
                            className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                          >
                            Contact Us
                          </Link>
                      )}  
                  </div>
                </div>
              ))}
            </TooltipProvider>
            </div>
          </div>
  
    </div>
    )
  };
export default Price;
