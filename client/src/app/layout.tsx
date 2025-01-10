import type { Metadata } from "next";
import localFont from "next/font/local";
import { Aclonica,Rubik } from "next/font/google";
import "./globals.css";
import React from "react";

import "./globals.css";
import SessionWrapper from "@/src/Components/SessionWrapper";
import { Toaster } from "sonner";

import Head from "next/head";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const aclonica = Aclonica({
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-aclonica",
});
const rubik = Rubik({
  style: ["normal"],
  weight: ["400","300","500","600","700","800"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "ANAND PKC",
  description: "World Class Paintings",
  keywords: ["Next.js", "React", "TypeScript", "Web Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aclonica.variable} ${rubik.variable} antialiased`}
      >
        <SessionWrapper>
          <Toaster
            position="top-right"
            expand={false}
            duration={3000}
            visibleToasts={1}
            richColors
          />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
