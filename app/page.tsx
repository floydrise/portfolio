"use client"

import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import Navbar from "@/components/Navbar";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
} from "react-icons/tb";
import SkillCard from "@/components/SkillCard";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

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

  const dummyContent = [
    {
      badge: "Northcoders, UK",
      title: "Trainee Software Developer",
      dates: "Oct 2024 - Jan 2025",
      description: [
        "13 week programming bootcamp, learning the fundamentals necessary for front\n" +
          "end and back end development, testing and hosting.",
        "Collaborated with colleagues on developing projects, utilising Test Driven\n" +
          "Development and pair programming.",
      ],
    },
    {
      badge: "Film and TV Extra, UK",
      title: "Supporting artist",
      dates: "Jun 2021 - August 2024",
      description: [
        "Play non-speaking roles in film and television productions.",
        "Appear in the background of scenes to create a realistic environment, such as crowd members, diners in a restaurant, or passersby on a busy street.",
      ],
    },
    {
      badge: "BIMM University, UK",
      title: "Certificate of Higher Education",
      dates: "Oct 2018 - May 2020",
      description: [
        "Completed two years of studies, focusing on recording, performance and mixing and\n" +
          "achieving a Certificate of Higher Education.",
      ],
    },
    {
      badge: "Mathematics and science high school, Bulgaria",
      title: "High school diploma",
      description: [
        "Focused on mathematics and science, building a strong analytical and problem-\n" +
          "solving foundation.",
      ],
    },
  ];

  const skillCards = [
    {
      skill: "TypeScript",
      icon: <TbBrandTypescript />
    },
    {
      skill: "Next.js",
      icon: <TbBrandNextjs />,
    },
    {
      skill: "React",
      icon: <TbBrandReact />
    },
    {
      skill: "Tailwind",
      icon: <TbBrandTailwind />,
    },
    {
      skill: "Express",
      icon: <SiExpress />
    },
    {
      skill: "PostgreSQL",
      icon: <BiLogoPostgresql />
    }
  ]

  return (
    <main>
      <Navbar className="top-2 px-2" />
      {/* Home */}
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
        </div>
      </div>
      {/* Experience and education */}
      <div className={"mx-auto max-w-5xl"}>
        <h1
          id={"experience"}
          className={
            "px-4 md:px-0 pt-20 text-2xl font-bold dark:text-white md:pt-28 md:text-7xl"
          }
        >
          Experience / Education
        </h1>
      </div>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white dark:bg-slate-200 dark:text-black rounded-full text-sm w-fit px-4 py-1 mb-2">
                {item.badge}
              </h2>
              <p className={twMerge("text-xl ml-2")}>{item.title}</p>
              <p className={"mb-4 ml-2"}>{item.dates}</p>
              <div className="text-sm  prose prose-sm dark:prose-invert">
                <ul className={"ml-6"}>
                  {item.description.map((text, index) => (
                    <li className={"list-disc"} key={index}>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
      {/* Skills */}
      <div className={"mx-auto max-w-5xl"}>
        <h1
          id={"skills"}
          className={
            "px-4 md:px-0 pt-20 text-2xl font-bold dark:text-white md:pt-28 md:text-7xl"
          }
        >
          Skills
        </h1>
      </div>
      <div
        className={
          "grid grid-cols-1 gap-6 mx-auto max-w-5xl py-10 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        {skillCards.map((data, index) => (
            <SkillCard key={index} skill={data.skill} icon={data.icon}/>
        ))}
      </div>
    </main>
  );
}
