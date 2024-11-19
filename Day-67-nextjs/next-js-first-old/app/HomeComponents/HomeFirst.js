"use client";
import { motion } from "framer-motion";

export default function HomeFirst() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      Does it work?
    </motion.div>
  );
}
