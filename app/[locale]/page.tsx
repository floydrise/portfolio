import React from "react";
import Navbar from "@/components/Navbar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Home } from "@/components/Home";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import {routing} from "@/i18n/routing";
import {setRequestLocale} from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function Main({params}:{params: Promise<{ locale: "en"|"bg" }>;}) {
  const projects = [
    {
      title: "Grocery list",
      link: "https://github.com/floydrise/grocery-list-react",
      thumbnail: "/groceryList.png",
    },
    {
      title: "FitSpo",
      link: "https://github.com/floydrise/fitspo-app",
      thumbnail: "/fitSpo.png",
    },
    {
      title: "React News",
      link: "https://github.com/floydrise/react-news",
      thumbnail: "/reactNews.png",
    },

    {
      title: "Tic-Tac-Toe",
      link: "https://github.com/floydrise/tic-tac-react",
      thumbnail: "/ticTacToe.png",
    },
    {
      title: "News API",
      link: "https://github.com/floydrise/News-REST-API",
      thumbnail: "/newsApi.png",
    },

    {
      title: "Tic-Tac-Toe",
      link: "https://github.com/floydrise/tic-tac-react",
      thumbnail: "/ticTacToe.png",
    },
    {
      title: "VanillaJS Calculator",
      link: "https://github.com/floydrise/odin-calculator",
      thumbnail: "/calculator.png",
    },
    {
      title: "Grocery list",
      link: "https://github.com/floydrise/grocery-list-react",
      thumbnail: "/groceryList.png",
    },
    {
      title: "News API",
      link: "https://github.com/floydrise/News-REST-API",
      thumbnail: "/newsApi.png",
    },
    {
      title: "React News",
      link: "https://github.com/floydrise/react-news",
      thumbnail: "/reactNews.png",
    },
    {
      title: "Tic-Tac-Toe",
      link: "https://github.com/floydrise/tic-tac-react",
      thumbnail: "/ticTacToe.png",
    },
  ];
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Navbar className="top-2 px-2" />
      <Home locale={locale} />
      <Experience />
      <Skills />
      <HeroParallax products={projects} />
    </main>
  );
}
