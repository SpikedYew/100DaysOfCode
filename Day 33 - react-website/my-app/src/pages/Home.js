import React from "react";
// import Navbar from "./components/navbar";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Analytics from "../components/Analytics";
import Contact from "../components/Contact";
import { motion } from "framer-motion";
// import Resources from "./pages/Resources";

export default function Home() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {/* <Navbar /> */}
        <Hero />
        <Main />
        <Analytics />
        <Contact
          instagram="@bartoszchmieleckiweb"
          facebook="bartoszchmielecki"
        />
      </motion.div>
    </>
  );
}
