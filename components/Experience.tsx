import { TracingBeam } from "@/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";
import React from "react";

export const Experience = () => {
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

  return (
    <>
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
    </>
  );
};
