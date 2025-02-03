import SkillCard from "@/components/ui/SkillCard";
import React from "react";
import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const Skills = () => {
  const skillCards = [
    {
      skill: "TypeScript",
      icon: <TbBrandTypescript />,
    },
    {
      skill: "Next.js",
      icon: <TbBrandNextjs />,
    },
    {
      skill: "React",
      icon: <TbBrandReact />,
    },
    {
      skill: "Tailwind",
      icon: <TbBrandTailwind />,
    },
    {
      skill: "Express",
      icon: <SiExpress />,
    },
    {
      skill: "PostgreSQL",
      icon: <BiLogoPostgresql />,
    },
  ];

  return (
    <>
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
          <SkillCard key={index} skill={data.skill} icon={data.icon} />
        ))}
      </div>
    </>
  );
};
