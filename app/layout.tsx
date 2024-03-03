import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import type { Viewport } from 'next'
const font = Poppins({ subsets: ["latin"],weight: '400' });
import { SpeedInsights } from "@vercel/speed-insights/next"
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata()

export const viewport: Viewport = {
  themeColor: 'black', // Set your preferred theme color here
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Analytics />
        {children}
        <SpeedInsights />
        </body>
    </html>
  );
}
