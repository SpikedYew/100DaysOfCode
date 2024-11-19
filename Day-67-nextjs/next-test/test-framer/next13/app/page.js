"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
        Animated Content
      </motion.div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* other content */}
      </div>
    </main>
  );
}
