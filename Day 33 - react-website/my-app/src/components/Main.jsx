import React from "react";
import MainCard from "./MainCard";
import { motion } from "framer-motion";

export default function Main() {
  const cardMap = [
    {
      title: "Offer 1",
      text: "This is offer description. You can put whatever you want here",
      price: "199$",
      url: "",
      popupStyle:
        "fixed top-0 left-0 z-10 w-[100vw] h-[100vh] flex items-center justify-center bg-opacity-0",
    },
    {
      title: "Offer 2",
      text: "This is offer description. You can put whatever you want here",
      price: "199$",
      url: "",
      popupStyle:
        "fixed top-0 left-0 z-10 w-[100vw] h-[100vh] flex items-center justify-center bg-opacity-0",
    },
    {
      title: "Offer 3",
      text: "This is offer description. You can put whatever you want here",
      price: "199$",
      url: "",
      popupText: "This is a text PopUp",
      popupStyle:
        "fixed top-0 left-0 z-10 w-[100vw] h-[100vh] flex items-center justify-center bg-opacity-0",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=" h-[max-content] p-10 flex flex-col min-h-[30vh]  sm:h-[50vh] md:h-[50vh]  w-full bg-slate-800 text-white  md:flex-row justify-center items-center"
    >
      {cardMap.map((card, index) => (
        <MainCard
          key={index}
          title={card.title}
          text={card.text}
          price={card.price}
          url={card.url}
          popupText={card.popupText}
          popupStyle={card.popupStyle}
        />
      ))}
    </motion.div>
  );
}
