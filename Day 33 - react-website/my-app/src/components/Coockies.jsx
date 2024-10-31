import React, { useState } from "react"; // Import React and useState properly
import { AnimatePresence, motion } from "framer-motion";

export default function Cookies() {
  const [isVisible, setIsVisible] = useState(false);
  const handleCookies = () => setIsVisible(!isVisible);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={handleCookies}
        className="fixed w-[50px] h-[50px] bg-slate-200 border-slate-600 border-2 border-solid z-50 left-5 bottom-5 md:bottom-10 md:left-10 rounded-full"
      ></motion.div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, x: -200 }}
            onClick={handleCookies}
            className="fixed bg-slate-400 w-[80vw] h-[60vh] text-3xl"
          >
            Cookies
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
