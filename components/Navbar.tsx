"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {SunIcon, MoonIcon, BeakerIcon} from "@heroicons/react/24/outline";
import {useTheme} from "next-themes";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const {setTheme} = useTheme();
  return (
    <div className={cn("fixed top-10 inset-x-0 w-80 mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Navigation">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#home">Home</HoveredLink>
            <HoveredLink href="/#experience">Experience</HoveredLink>
            <HoveredLink href="/#skills">Skills</HoveredLink>
            <HoveredLink href="/#projects">Projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Socials">
          <div className="flex flex-col space-y-4 text-sm">
            <a
              href="https://github.com/floydrise"
              target={"_blank"}
              className={"flex gap-1 items-center"}
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/stefan-petrov-6404401bb/"
              target={"_blank"}
              className={"flex gap-1 items-center"}
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href={"mailto:floydrise@gmail.com"}
              className={"flex gap-1 items-center"}
            >
              <MdEmail />
              Email
            </a>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Theme">
          <div className="flex flex-col space-y-4 text-sm">
            <button className={"flex gap-1 items-center"} onClick={() => {setTheme("light")}}><SunIcon
                className={"w-4 text-yellow-500"}/> Light
            </button>
            <button className={"flex gap-1 items-center"} onClick={() => {setTheme("dark")}}><MoonIcon
                className={"w-4 text-blue-500"}/> Dark
            </button>
            <button className={"flex gap-1 items-center"} onClick={() => {setTheme("system")}}><BeakerIcon
                className={"w-4 text-green-500"}/> System
            </button>
          </div>
        </MenuItem>
      </Menu>
    </div>
);
}
