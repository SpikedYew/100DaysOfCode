import React, { useEffect } from "react";
import gif from "./gif.gif";
import gif2 from "./zYr.gif";
import "./index.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Paralax from "./Components/paralax";

function App() {
  //Keeps you on top of the page when its loaded
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Disable scrolling by setting overflow to 'hidden'
    document.body.style.overflow = "hidden";

    // Re-enable scrolling after 3 seconds
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 5000); // 3000 milliseconds = 3 seconds

    // Cleanup on component unmount
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 5 }}
        className="w-full z-40 fixed h-screen mt-[30vh] flex justify-center"
      >
        <motion.h1
          initial={{ y: -550 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 3,
            duration: 0.3,
            stiffness: 80,
            damping: 9,
          }}
          className="absoulte mt-[15vh] z-50 font-extrabold text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-white"
        >
          Happy Halloween!
        </motion.h1>

        <motion.img
          initial={{ y: "100vh", scale: 1, opacity: 1 }}
          animate={{ y: 0, scale: 20, opacity: 0 }}
          transition={{
            y: { duration: 1 },
            scale: { delay: 1.8, duration: 0.9 },
            opacity: { delay: 2, duration: 0.7 },
          }}
          className="absolute w-[300px] mx-auto"
          src={gif2}
        ></motion.img>
      </motion.div>
      <motion.div
        className="fixed z-20"
        initial={{ y: -100, x: "150vw" }}
        animate={{ y: 250, x: -300 }}
        transition={{ duration: 2, delay: 2.3 }}
      >
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [0, 50, 0] }} //from o to 50 to 0
          // transition={{
          //   duration: 0.5,
          //   ease: "easeInOut",
          //   repeat: Infinity,
          //   repeatDelay: 1,
          // }}

          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 0.2,
            y: 0,
          }}
          className="w-[300px] h-[300px] lg:w-[150px] lg:h-[150px] z-20"
          src={gif}
        ></motion.img>
      </motion.div>
      <motion.div
        className="fixed z-20"
        initial={{ y: "50vh", x: "150vw" }}
        animate={{ y: -150, x: -250 }}
        transition={{ duration: 2, delay: 2.2 }}
      >
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [0, 60, 0] }} //from o to 50 to 0
          // transition={{
          //   duration: 0.5,
          //   ease: "easeInOut",
          //   repeat: Infinity,
          //   repeatDelay: 1,
          // }}

          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 0.2,
            y: 0,
          }}
          className="w-[250px] h-[250px] lg:w-[200px] lg:h-[200px] z-20"
          src={gif}
        ></motion.img>
      </motion.div>
      <motion.div
        className="fixed z-20"
        initial={{ y: "80vh", x: "150vw" }}
        animate={{ y: "50vh", x: -270 }}
        transition={{ duration: 2, delay: 2.4 }}
      >
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [0, 60, 0] }} //from o to 50 to 0
          // transition={{
          //   duration: 0.5,
          //   ease: "easeInOut",
          //   repeat: Infinity,
          //   repeatDelay: 1,
          // }}

          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 0.2,
            y: 0,
          }}
          className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] z-20"
          src={gif}
        ></motion.img>
      </motion.div>

      <motion.div
        initial={{ opacity: [0, 1, 0], y: 0, height: "100vh" }}
        animate={{ opacity: 1, y: -800, height: 0 }}
        transition={{
          opacity: { duration: 0.5, delay: 2.1 },
          y: { duration: 0.5, delay: 5 },
          height: { duration: 0.5, delay: 5 },
        }}
        // onAnimationComplete={() => setBgColor("orange")};
        // onAnimationComplete={() => setHeight("0")}
        style={{
          backgroundColor: "orange",
        }}
        className="fixed z-10  w-[100vw]"
      ></motion.div>
      <motion.div
      // initial={{ y: "100vh", opacity: 1 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="w-full h-screen bg-slate-600 text-center flex items-center justify-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 400, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              opacity: { duration: 0.3, delay: 6 },
              y: { duration: 0.8 },
              scale: { duration: 0.3, delay: 0.8 },
            }}
            viewport={{ once: true }}
            className="text-2xl"
          >
            This will be continued
          </motion.h1>
        </motion.div>
      </motion.div>
      {/* <Paralax /> */}
    </>
  );
}

export default App;
