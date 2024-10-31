import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link
import { motion } from "framer-motion";

export default function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1,
        ease: "easeInOut",
        type: "spring",
        stiffness: 120,
        duration: 0.3,
      }}
      className="fixed left-0 top-0 w-full bg-white shadow-md z-10"
    >
      <div className="flex text-black justify-around items-center h-24 max-w-[1240px] max-full mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-slate-600">REACT.</h1>

        {/* Navbar w wersji desktopowej */}
        <ul className="hidden md:flex font-semibold">
          <li className="p-4 check-hover">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 check-hover">
            <Link to="/company">Company</Link>
          </li>
          <li className="p-4 check-hover">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="p-4 check-hover">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 check-hover">
            <a href="/#contact">Contact</a>
            {/* <Link to="/contact" onClick={handleNav}>
                Contact
              </Link> */}
          </li>
        </ul>

        {/* Przełącznik hamburgera dla urządzeń mobilnych */}
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Menu mobilne */}
        <div
          className={`fixed p-4 left-0 top-0 w-[50%] h-full border-r border-r-slate-50 shadow-xl bg-slate-50 transition-transform duration-500 ease-in-out ${
            !nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="p-3 text-3xl font-bold text-slate-600">React</h1>

          <ul className="pt-24 uppercase font-semibold">
            <li className="p-4 border-b border-b-grey-200">
              <Link to="/" onClick={handleNav}>
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-b-grey-200">
              <Link to="/company" onClick={handleNav}>
                Company
              </Link>
            </li>
            <li className="p-4 border-b border-b-grey-200">
              <Link to="/resources" onClick={handleNav}>
                Resources
              </Link>
            </li>
            <li className="p-4 border-b border-b-grey-200">
              <Link to="/about" onClick={handleNav}>
                About
              </Link>
            </li>
            <li className="p-4 border-b border-b-grey-200">
              <a href="#contact">Contact</a>
              {/* <Link to="/contact" onClick={handleNav}>
                Contact
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// Stare Menu

// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// export default function Navbar() {
//   const [nav, setNav] = useState(true);

//   const handleNav = () => {
//     setNav(!nav);
//   };
//   return (
//     <div className="fixed left-0 top-0 w-full  bg-white shadow-md z-10">
//       <div className="flex text-black justify-around items-center h-24 max-w-[1240px] max-full mx-auto px-4">
//         <h1 className="w-full text-3xl font-bold text-slate-600">REACT.</h1>

//         <ul className="hidden md:flex font-semibold">
//           <li className="p-4">Home</li>
//           <li className="p-4">Company</li>
//           <li className="p-4">Resources</li>
//           <li className="p-4">About</li>
//           <li className="p-4">Contact</li>
//         </ul>
//         <div onClick={handleNav} className="block md:hidden">
//           {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>
//         <div
//           className={`fixed p-4 left-0 top-0 w-[50%] h-full border-r border-r-slate-50 shadow-xl bg-slate-50 transition-transform duration-500 ease-in-out ${
//             !nav ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <h1 className="p-3 text-3xl font-bold text-slate-600">React</h1>

//           <ul className="pt-24 uppercase font-semibold">
//             <li className="p-4 border-b  border-b-grey-200">Home</li>
//             <li className="p-4 border-b  border-b-grey-200">Company</li>
//             <li className="p-4 border-b  border-b-grey-200">Resources</li>
//             <li className="p-4 border-b  border-b-grey-200">About</li>
//             <li className="p-4 border-b  border-b-grey-200">Contact</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
