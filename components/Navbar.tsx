"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {MdEmail} from "react-icons/md";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Navigation">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="">Web Development</HoveredLink>
            <HoveredLink href="">Interface Design</HoveredLink>
            <HoveredLink href="">Search Engine Optimization</HoveredLink>
            <HoveredLink href="">Branding</HoveredLink>
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
              <MdEmail/>
              Email
            </a>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
