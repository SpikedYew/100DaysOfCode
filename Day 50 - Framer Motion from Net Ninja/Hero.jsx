import { motion } from "framer-motion";
import React from "react";
import { ReactTyped, Typed } from "react-typed";

export default function Hero() {
  return (
    <div id="home" className="mt-24">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <motion.p
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
            type: "spring",
            stiffness: 50,
          }}
          initial={{
            y: -150,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          className="text-slate-600 font-bold p-2"
        >
          GROWING WITH DATA ANALYTICS
        </motion.p>
        <motion.h1
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"
        >
          Grow with data.
        </motion.h1>
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
        <motion.button
          whileHover={{
            scale: 1.02,
            textShadow: "0px 0px 2px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(0,0,0)",
            // originX: 0,
          }}
          transition={{ duration: 0.2 }}
          className="bg-slate-600 w-[200px] rounded-sm font-medium mx-auto py-3 text-white"
        >
          <a href="">Get Started</a>
        </motion.button>
      </div>
    </div>
  );
}
