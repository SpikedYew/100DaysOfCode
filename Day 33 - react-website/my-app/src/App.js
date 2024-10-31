import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Resources from "./pages/Resources";

import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Coockies from "./components/Coockies";

function App() {
  return (
    <Router>
      <Navbar />
      <Coockies />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}
// function App() {
//   return (
//     <>
//       <div>
//         <Navbar />
//         <Hero />
//         <Main />
//         <Analytics />
//         <Contact />
//       </div>
//     </>
//   );
// }
// import Hero from "./components/Hero";
// import Main from "./components/Main";
// import Analytics from "./components/Analytics";
// import Contact from "./components/Contact";
// import Resources from "./pages/Resources";

export default App;
