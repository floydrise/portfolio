import React from "react";
import {Boxes} from "@/components/ui/background-boxes";
import Navbar from "@/components/Navbar";
import {TypewriterEffect} from "@/components/ui/typewriter-effect";

export default function Home() {
    const words = [
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
            className: "text-violet-500 dark:text-lime-400",
        },
    ];
    return (
        <main>
            <Navbar className="top-2 px-3"/>
            <div
                className="h-96 relative w-full overflow-hidden dark:bg-black bg-white flex flex-col items-center justify-center">
                <div
                    className="absolute inset-0 w-full h-full bg-indigo-100 dark:bg-indigo-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"/>
                <Boxes/>
                <div className="relative z-30 flex flex-col items-center justify-center h-[30rem] mt-40">
                    <p className="text-neutral-900 backdrop-blur-sm rounded-md dark:text-neutral-200 text-base mb-10">
                        Hi 👋🏻, I am Stefan 👀, a junior full-stack web developer 💻
                    </p>
                    <TypewriterEffect words={words}/>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                        <button
                            className="w-40 h-10 rounded-md bg-black border dark:border-white border-transparent text-white text-md">
                            Download CV
                        </button>
                        <button className="w-40 h-10 rounded-md bg-white text-black border border-black  text-sm">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}


