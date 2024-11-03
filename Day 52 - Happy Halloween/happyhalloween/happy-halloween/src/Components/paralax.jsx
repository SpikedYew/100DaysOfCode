import React from "react";
import image1 from "./full-background.jpg";
import image2 from "./cut-bckground.png";

export default function Paralax() {
  return (
    <div className="w-full h-screen overlow-hidden relativee grid place-items-center">
      <h1 className="font-bold text-white text-7xl md:text-9xl relative z-10">
        Parallax
      </h1>
      <img
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(./full-background.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <img
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(./cut-background.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
