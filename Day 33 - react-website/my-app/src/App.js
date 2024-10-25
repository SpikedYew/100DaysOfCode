import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Analytics from "./components/Analytics";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Main />
        <Analytics />
      </div>
    </>
  );
}

export default App;
