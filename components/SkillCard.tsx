import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { FaReact } from "react-icons/fa";

const SkillCard = ({skill, icon}: {skill: string, icon: React.ReactNode}) => {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[15rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <EvervaultCard text={skill} icon={icon} />
    </div>
  );
};

export default SkillCard;
