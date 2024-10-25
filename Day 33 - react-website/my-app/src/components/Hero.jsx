import React from "react";
import { ReactTyped, Typed } from "react-typed";

export default function Hero() {
  return (
    <div className="">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-slate-600 font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexsible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-slate-600 py-4">
          Monitor your data analytics to increase revenue for BTB, BTC and SASS
        </p>
        <button className="bg-slate-600 w-[200px] rounded-sm font-medium mx-auto py-3 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
