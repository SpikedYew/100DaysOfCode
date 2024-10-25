import React from "react";

export default function MainCard({ title, text, price, url }) {
  return (
    <div className="w-[80vw] h-[30vh] sm:w-[80vw] sm:h-[20vh] md:w-[400px] md:h-[350px] sm:flex sm:flex-col justify-around bg-slate-500 mt-5 md:m-5 rounded-md shadow-md shadow-slate-900 p-10 hover:bg-slate-700 border-2 border-slate-800 hover:shadow-lg hover:border-solid hover:border-2 hover:border-white hover:shadow-slate-950 transition-all">
      <p className="text-slate-100 text-2xl font-bold pb-5">{title}</p>
      <p className="text-slate-200 text-xl pb-10">{text}</p>
      <p className="text-slate-50 text-xl font-light">{price}</p>
      <img src={url}></img>
    </div>
  );
}
