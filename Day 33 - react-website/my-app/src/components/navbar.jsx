import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex text-black justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

      <ul className="hidden md:flex font-semibold">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={`fixed p-4 left-0 top-0 w-[50%] h-full border-r border-r-slate-50 shadow-xl bg-slate-50 transition-transform duration-500 ease-in-out ${
          !nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="p-3 text-3xl font-bold text-slate-600">React</h1>

        <ul className="pt-24 uppercase font-semibold">
          <li className="p-4 border-b  border-b-grey-200">Home</li>
          <li className="p-4 border-b  border-b-grey-200">Company</li>
          <li className="p-4 border-b  border-b-grey-200">Resources</li>
          <li className="p-4 border-b  border-b-grey-200">About</li>
          <li className="p-4 border-b  border-b-grey-200">Contact</li>
        </ul>
      </div>
    </div>
  );
}
