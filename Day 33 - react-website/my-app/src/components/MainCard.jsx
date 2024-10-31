import React from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MainCard({
  title,
  text,
  price,
  url,
  popupText,
  popupStyle,
}) {
  // function Component() {
  //   const { scrollYProgress } = useScroll();
  // }
  const [isVisible, setIsVisible] = useState(false);
  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  const cardVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onClick={togglePopup}
        className="w-[80vw] h-[max-content] sm:w-[80vw] sm:h-[20vh] md:w-[400px] md:h-[max-content] sm:flex sm:flex-col justify-around bg-slate-500 mt-5 md:m-5 rounded-md shadow-md shadow-slate-900 p-5 md:p-8 lg:p-10 hover:bg-slate-700 border-2 border-slate-800 hover:shadow-lg hover:border-solid hover:border-2 hover:border-white hover:shadow-slate-950 transition-all"
      >
        <p className="text-slate-100 text-xl md:text-2xl font-bold pb-1 md:pb-5">
          {title}
        </p>
        <p className="text-slate-200 text-lg md:text-xl pb-5 md:pb-10">
          {text}
        </p>
        <p className="text-slate-50 text-md md:text-xl font-light">{price}</p>
        <img src={url}></img>
      </motion.div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={togglePopup}
            className={popupStyle}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0 }}
          >
            <div className=" max-w-[500px] min-w-[350px] w-[50%] flex flex-col items-center justify-center h-[50%] text-left bg-slate-500 rounded-lg shadow-slate-900 shadow-sm">
              <h1 className="text-slate-100 text-xl md:text-2xl font-bold pb-1 md:pb-5">
                {title}
              </h1>
              <p className="text-slate-200 text-lg md:text-xl pb-5 md:pb-10">
                {popupText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
