import { motion, useScroll, useTransform } from "framer-motion";
import imageBottom from "./image-bottom.png";
import imageFull from "./image-full.jpg";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  // passing target ref and offset so we know when our animation starts and ends
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    targer: ref,
    offset: ["start start", "end start"],
  });

  //we need our value where we want from then to (array1 and array2)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);

  return (
    <div
      className="w-full h-screen overflow-hidden relative grid place-content-center"
      ref={ref}
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-2xl md:text-5xl lg:text-7xl xl:text-9xl relative z-30"
      >
        MultiLayerParallax
      </motion.h1>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageFull})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${imageBottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
