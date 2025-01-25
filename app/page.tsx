import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import Navbar from "@/components/Navbar";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {twMerge} from "tailwind-merge";

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
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat
            incididunt incididunt enim magna id est qui sunt fugiat. Laboris do
            duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non
            reprehenderit dolore nisi velit exercitation Lorem qui do enim
            culpa. Aliqua eiusmod in occaecat reprehenderit laborum nostrud
            fugiat voluptate do Lorem culpa officia sint labore. Tempor
            consectetur excepteur ut fugiat veniam commodo et labore dolore
            commodo pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia
            qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla
            nostrud. Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "React",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt
            exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
            consectetur sint qui qui do do qui do. Labore laborum culpa magna
            reprehenderit ea velit id esse adipisicing deserunt amet dolore.
            Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
            aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
        </>
      ),
      badge: "Changelog",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt
            exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
            consectetur sint qui qui do do qui do. Labore laborum culpa magna
            reprehenderit ea velit id esse adipisicing deserunt amet dolore.
            Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
            aliquip duis veniam sunt.
          </p>
        </>
      ),
      badge: "Launch Week",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main>
      <Navbar className="top-2 px-2" />
      <div
        id={"home"}
        className="h-screen relative w-full overflow-hidden dark:bg-black bg-white flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 w-full h-full bg-indigo-50 dark:bg-indigo-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
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
      <div className={"mx-auto max-w-6xl"}>
        <h1
          id={"experience"}
          className={
            "px-8 md:px-0 pt-20 text-2xl font-bold dark:text-white md:pt-28 md:text-7xl"
          }
        >
          Experience
        </h1>
      </div>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge( "text-xl mb-4")}>
                {item.title}
              </p>
              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </main>
  );
}
