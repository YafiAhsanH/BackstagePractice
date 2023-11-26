"use client"
import React from "react";
import Image from "next/image";

const IssuePage = ({img, id, bg}: {img: string, id: number, bg: string}) => {
  return (
    <div
      id={`issue${id}`}
      className="flex flex-col h-screen justify-center items-center snap-start font-bold text-sm "
    >
      <Image
        src={img}
        width={400}
        height={600}
        alt={`Issue #${id}`}
        className="max-h-[30rem] max-w-[22rem] shadow-[-15px_15px_15px_-4px_rgba(0,0,0,0.5)]"
      />
      <p className="py-4 ">Issue #{id}</p>
      <p>
        <span className={`${bg == "my-white" ? "text-pink-400" : "text-white"} hover:underline hover:cursor-pointer`}>
          BUY HERE
        </span>{" "}
        (Europe)
      </p>
      <p>
        <span className={`${bg == "my-white" ? "text-pink-400" : "text-white"} hover:underline hover:cursor-pointer`}>
          BUY HERE
        </span>{" "}
        (UK & Overseas)
      </p>
      <p className="pt-4 ">
        or in{" "}
        <span className={`${bg == "my-white" ? "text-pink-400" : "text-white"} hover:underline hover:cursor-pointer`}>
          selected stores
        </span>
      </p>
    </div>
  );
};

export default IssuePage;
