import type { Metadata } from "next";

import Head from "next/head";
import "@/styles/globals.css";
import React from "react";

import Navbar from "@/common/components/Navbar";
import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";

// TODO cambiar metadata

export const metadata: Metadata = {
  title: "SimpliMuv",
  description: "Motorcycle and accesories store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/sf-ui-display" rel="stylesheet" />
      </Head>
      <body>
        <Navbar />
        <Header />
        <main className="md:px-[60px] xl:px-[165px] m-auto max-w-[1440px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
