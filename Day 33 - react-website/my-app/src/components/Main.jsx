import React from "react";
import MainCard from "./MainCard";

export default function Main() {
  const cardMap = [
    {
      title: "Offer 1",
      text: "This is offer description. You can put whatever you want here",
      price: "199$",
      url: "",
    },
    {
      title: "Offer 2",
      text: "This is offer description. You can put whatever you want here",
      price: "199$",
      url: "",
    },
    {
      title: "Offer 3",
      text: "This is offer description. You can put whatever you want here",
      price: "199$",
      url: "",
    },
  ];
  return (
    <div className=" h-[110vh] flex flex-col min-h-[50vh]  sm:h-[70vh] md:h-[50vh]  w-full bg-slate-800 text-white  md:flex-row justify-center items-center">
      {cardMap.map((card, index) => (
        <MainCard
          key={index}
          title={card.title}
          text={card.text}
          price={card.price}
          url={card.url}
        />
      ))}
    </div>
  );
}
