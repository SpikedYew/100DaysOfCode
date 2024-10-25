import React from "react";
import Laptop from "../assets/laptop.jpg";

export default function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-xl font-bold text-slate-800">
            DATA ANALUTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl font-medium pt-1 sm:text-3xl text-2xl">
            Manage Data Analutics Centrally
          </h1>
          <p className="pt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            natus assumenda veritatis rerum alias saepe repellat adipisci
            ducimus quas pariatur explicabo facere aliquid perspiciatis, harum
            libero facilis accusantium ut modi!
          </p>
          <button className="bg-slate-600 w-[200px] rounded-sm font-medium mx-auto py-3 mt-6 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
