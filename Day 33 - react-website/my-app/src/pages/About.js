import React from "react";

import { motion, useAnimate } from "framer-motion";
import "../styles.css";

export default function About() {
  return (
    <motion.div
      className="mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    ></motion.div>
  );
}
