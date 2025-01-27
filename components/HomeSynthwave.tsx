import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

interface Words {
  text:string
}

const HomeSynthwave = ({words}:{words:Words[]}) => {
  return (
    <div
      id={"home"}
      className="h-screen shadow-2xl shadow-violet-300 dark:shadow-lime-200 rounded-b-xl relative w-full overflow-hidden dark:bg-black bg-white flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full bg-indigo-100 dark:bg-indigo-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="relative z-20 flex flex-col items-center justify-center h-[30rem] mt-40">
        <p className="text-neutral-900 text-center dark:text-neutral-200 text-sm md:text-base mb-10">
          Hi 👋🏻, I am Stefan 👀, a junior full-stack web developer 💻
        </p>
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button className="w-40 h-10 rounded-md bg-black border dark:border-white border-transparent text-white text-md">
            Download CV
          </button>
          <button className="w-40 h-10 rounded-md bg-white text-black border border-black  text-sm">
            Contact Me
          </button>
        </div>
        <div className={"mt-10"}>
          <Link href={"/#experience"}>
            <Button
              borderRadius="1.75rem"
              className="bg-slate-100 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <ArrowDownIcon className={"w-6"} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSynthwave;
