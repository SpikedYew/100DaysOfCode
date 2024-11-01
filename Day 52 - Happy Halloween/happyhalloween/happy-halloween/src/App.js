import gif from "./gif.gif";
import gif2 from "./zYr.gif";
import "./index.css";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("orange");

  return (
    <>
      <div className="w-full z-40 fixed h-screen mt-[30vh] flex justify-center">
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
          className="absoulte mt-[15vh] z-50 font-extrabold text-xl md:text-5xl text-white"
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
      </div>
      <motion.div
        className="fixed z-20"
        initial={{ y: -100, x: "150vw" }}
        animate={{ y: 250, x: -200 }}
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
          className="w-[150px] h-[150px] z-20"
          src={gif}
        ></motion.img>
      </motion.div>
      <motion.div
        className="fixed z-20"
        initial={{ y: "50vh", x: "150vw" }}
        animate={{ y: -150, x: -200 }}
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
          className="w-[150px] h-[150px] z-20"
          src={gif}
        ></motion.img>
      </motion.div>
      <motion.div
        className="fixed z-20"
        initial={{ y: "80vh", x: "150vw" }}
        animate={{ y: "50vh", x: -200 }}
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
          className="w-[150px] h-[150px] z-20"
          src={gif}
        ></motion.img>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.1 }}
        // onAnimationComplete={() => setBgColor("orange")}
        style={{
          backgroundColor: bgColor,
        }}
        className="absoulte z-0  w-[100vw] h-[100vh]"
      ></motion.div>
    </>
  );
}

export default App;
