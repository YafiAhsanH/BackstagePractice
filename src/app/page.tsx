"use client";
import { useState } from "react";
import IssuePage from "./IssuePage";

export default function Home() {
  const issues = [
    { id: 1, bg: "my-green", img: "/green.jpg" },
    { id: 2, bg: "my-orange", img: "/orange.jpg" },
    { id: 3, bg: "my-yellow", img: "/yellow.jpg" },
    { id: 4, bg: "my-blue", img: "/blue.jpg" },
    { id: 5, bg: "my-red", img: "/red.jpg" },
    { id: 6, bg: "my-white", img: "/white.jpg" },
  ];

  const [issueScroll, setIssueScroll] = useState(0);

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight } = event.target;
    const newScroll = Math.floor(scrollTop / clientHeight);
    setIssueScroll(newScroll);
    console.log(window.innerWidth);
  };

  return (
    <main
      className={`flex h-screen w-screen justify-between relative overflow-y-scroll no-scrollbar scroll-smooth snap-y snap-mandatory `}
      onScroll={handleScroll}
    >
      <div>
        <p className="absolute desktop:fixed desktop:top-0 desktop:left-0 text-black p-3 font-bold text-2xl desktop:text-4xl">
          BACKSTAGE TALKS
        </p>
        <div
          className={`flex flex-col mx-auto left-0 right-0 -z-50 desktop:absolute text-black items-center justify-center transition duration-400 ease-in-out bg-${issues[issueScroll].bg}`}
        >
          {issues.map((issue) => (
            <IssuePage
              key={issue.id}
              img={issue.img}
              id={issue.id}
              bg={issue.bg}
            />
          ))}
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden desktop:block">
          <div className="flex-col flex text-black fixed left-0 bottom-0 max-w-[25%] p-5">
            <p className="font-bold text-lg">
              Backstage Talks is a magazine of casual, but in depth dialogues on
              design and business. Our decisions shape and influence this
              complex world—to have a chance to make the right ones, we need to
              talk.
            </p>
            <p className="text-xs pt-2">
              © 2023{" "}
              <span className="underline hover:no-underline hover:cursor-pointer">
                Published by Büro Milk
              </span>
            </p>
            <p className="mt-6 text-lg font-bold underline hover:no-underline hover:cursor-pointer">
              Privacy Policy
            </p>
          </div>
          <p className="text-black fixed top-0 right-0 p-5 font-bold text-lg hover:underline hover:cursor-pointer">
            info@backstagetalks.com
          </p>
          <div className="text-black fixed bottom-0 right-0 p-5">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className={`hover:cursor-pointer hover:underline underline-offset-2 py-1 text-lg ${
                  issueScroll + 1 === issue.id && "font-bold"
                }`}
              >
                <a href={`#issue${issue.id}`}>Issue #{issue.id}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="text-black p-5 snap-start desktop:hidden">
          <div className="flex-col flex items-center text-center md:text-left md:items-start md:max-w-[25%] ">
            <p className="font-bold text-lg">
              Backstage Talks is a magazine of casual, but in depth dialogues on
              design and business. Our decisions shape and influence this
              complex world—to have a chance to make the right ones, we need to
              talk.
            </p>
            <p className="text-xs pt-2">
              © 2023{" "}
              <span className="underline hover:no-underline hover:cursor-pointer">
                Published by Büro Milk
              </span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between md:mt-6">
            <p className="text-lg font-bold underline hover:no-underline hover:cursor-pointer p-8 md:p-0">
              Privacy Policy
            </p>
            <p className="h-fit font-bold text-lg hover:underline hover:cursor-pointer p-7 md:p-0">
              info@backstagetalks.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
