import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/moving-border";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export const Home = () => {
  const words = [
    {
      text: "Junior",
    },
    {
      text: "TypeScript",
    },
    {
      text: "and",
    },
    {
      text: "React/Next.js",
    },
    {
      text: "developer.",
      className: "text-violet-500 dark:text-violet-400",
    },
  ];

  return (
    <>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-[30rem] mt-40">
          <p className="text-neutral-900 text-center dark:text-neutral-200 text-md md:text-lg mb-10">
            Hi 👋🏻, I am Stefan️ 👀
          </p>
          <TypewriterEffect words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <Link
              target={"_blank"}
              href={
                "https://drive.google.com/file/d/1X8bYm9hTbagyBvUqAwbYAACee-dgPPyT/view?usp=sharing"
              }
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white w-40"
              >
                <span>Download CV</span>
              </HoverBorderGradient>
            </Link>
            <Link href={"mailto:floydrise@gmail.com"}>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-indigo-50 w-40 text-black"
              >
                <span>Contact me</span>
              </HoverBorderGradient>
            </Link>
          </div>
          <div className={"mt-10"}>
            <Link href={"/#experience"}>
              <Button
                borderRadius="1.75rem"
                className="bg-slate-100 dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <ArrowDownIcon className={"w-6"} />
              </Button>
            </Link>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};
