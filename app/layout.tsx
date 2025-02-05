import type { Metadata } from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/components/ThemeProvider";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stefan's Portfolio",
  description: "Full-stack TS developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"scroll-smooth"} suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
