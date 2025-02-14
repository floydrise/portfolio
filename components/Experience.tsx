import { TracingBeam } from "@/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";
import React from "react";
import {getTranslations} from "next-intl/server";

export const Experience = async () => {
  const t = await getTranslations("Experience")

  const dummyContent = [
    {
      badge: t("northcoders.badge"),
      title: t("northcoders.title"),
      dates: t("northcoders.dates"),
      description: [t("northcoders.description.first"),t("northcoders.description.second")],
    },
    {
      badge: t("film.badge"),
      title: t("film.title"),
      dates: t("film.dates"),
      description: [
        t("film.description.first"),
        t("film.description.second"),
      ],
    },
    {
      badge: t("uni.badge"),
      title: t("uni.title"),
      dates: t("uni.dates"),
      description: [t("uni.description.first")],
    },
    {
      badge: t("school.badge"),
      title: t("school.title"),
      dates: t("school.dates"),
      description: [t("school.description.first")],
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
          {t("title")}
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
