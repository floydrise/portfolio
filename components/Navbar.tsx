"use client";

import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {HoveredLink, Menu, MenuItem} from "@/components/ui/navbar-menu";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {SunIcon, MoonIcon, BeakerIcon} from "@heroicons/react/24/outline";
import {useTheme} from "next-themes";
import {useTranslations} from "use-intl";
import {useParams} from "next/navigation";

export default function Navbar({className}: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const {setTheme} = useTheme();
  const t = useTranslations('Navigation');
  const {locale} = useParams();

  return (
    <div className={cn("fixed top-10 inset-x-0 w-80 mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item={t("navigation")}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href={`/${locale}/#home`}>{t("home")}</HoveredLink>
            <HoveredLink href={`/${locale}/#experience`}>{t("experience")}</HoveredLink>
            <HoveredLink href={`/${locale}/#skills`}>{t("skills")}</HoveredLink>
            <HoveredLink href={`/${locale}/#projects`}>{t("projects")}</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item={t("socials")}>
          <div className="flex flex-col space-y-4 text-sm">
            <a
              href="https://github.com/floydrise"
              target={"_blank"}
              className={"flex gap-1 items-center"}
            >
              <FaGithub/>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/stefan-petrov-6404401bb/"
              target={"_blank"}
              className={"flex gap-1 items-center"}
            >
              <FaLinkedin/>
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
        <MenuItem setActive={setActive} active={active} item={t("theme")}>
          <div className="flex flex-col space-y-4 text-sm">
            <button
              className={"flex gap-1 items-center"}
              onClick={() => {
                setTheme("light");
              }}
            >
              <SunIcon className={"w-4 text-yellow-500"}/> {t("light")}
            </button>
            <button
              className={"flex gap-1 items-center"}
              onClick={() => {
                setTheme("dark");
              }}
            >
              <MoonIcon className={"w-4 text-blue-500"}/> {t("dark")}
            </button>
            <button
              className={"flex gap-1 items-center"}
              onClick={() => {
                setTheme("system");
              }}
            >
              <BeakerIcon className={"w-4 text-green-500"}/> {t("system")}
            </button>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item={t("language")}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/en">🇬🇧 {t("english")}</HoveredLink>
            <HoveredLink href="/bg">🇧🇬 {t("bulgarian")}</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
