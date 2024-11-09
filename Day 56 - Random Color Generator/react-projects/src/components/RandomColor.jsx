import React from "react";
import { useState, useEffect } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleBackgroundRandomColorRGB() {
    const r = randomColorUtility(256);
    const b = randomColorUtility(256);
    const g = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }
  function handleBackgroundRandomColorHEX() {
    //#123513

    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    // console.log(hexColor); works on gegnerate color
    setColor(hexColor);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleBackgroundRandomColorRGB();
    else handleBackgroundRandomColorHEX();
  }, [typeOfColor]);
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
        className=""
      >
        <button
          onClick={() => setTypeOfColor("hex")}
          className="text-black bg-white rounded-sm p-1 m-3"
        >
          Create HEX Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="text-black bg-white rounded-sm p-1 m-3"
        >
          Create RBG Color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleBackgroundRandomColorHEX
              : handleBackgroundRandomColorRGB
          }
          className="text-black bg-white rounded-sm p-1 m-3"
        >
          Generate Random Color
        </button>
        <div className="text-white text-xl font-bold m-10 flex align-middle">
          <h3 className="m-3">
            {typeOfColor === "rgb" ? "RBG Color" : "HEX Color"}
          </h3>
          <h1 className="m-3">{color}</h1>
        </div>
      </div>
    </>
  );
}
