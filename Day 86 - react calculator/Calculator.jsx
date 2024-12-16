import React, { useState, useEffect } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import { motion } from "motion/react";

export default function Calculator() {
  //Draggable

  //Needs dragable + framer motion

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // document.body.style.color = "red";
  });
  //this array
  function clicked() {
    const add = Number(inputValue);
    if (!isNaN(add)) {
      setCount(count + add);
      setHistory([...history, `+ ${add}`]);
      setInputValue("");
    } else {
      alert("Put number");
    }
    // setCount(count + 1);
    // history.push(count);
    // console.log(history);
  }
  function clickedMinus() {
    const add = Number(inputValue);
    if (!isNaN(add)) {
      setCount(count - add);
      setHistory([...history, `- ${add}`]);
      setInputValue("");
      historyFunc();
    } else {
      alert("Put number");
    }
  }
  function multiply() {
    const add = Number(inputValue);
    if (!isNaN(add)) {
      setCount(count * add);
      setHistory([...history, `* ${add}`]);
      setInputValue("");
    } else {
      alert("Put number");
    }
  }
  function divideCount() {
    const divisor = Number(inputValue);
    if (!isNaN(divisor)) {
      setHistory([...history, `/ ${divisor}`]);
      setCount(count / divisor);
      setInputValue("");
    } else {
      alert("Put number");
    }
  }
  function percent() {
    const percent = Number(inputValue);
    if (!isNaN(percent)) {
      setHistory([...history, `% ${percent}`]);
      setCount(count * 0.01 * percent);
      setInputValue("");
    }
  }
  //Poping previous element
  function handlePopHistory() {
    setHistory((prevHistory) => prevHistory.slice(0, -1));
  }
  //Added reset function/ reset count and history

  function handleReset() {
    setCount(0);
    setHistory([]);
  }
  //   const x = "123x";
  //   console.log(Number(x));
  //   const xy = Number(x);
  //   if (!isNaN(xy)) {
  //     console.log("its wrong");
  //   } else {
  //     console.log("its good");
  //   }

  return (
    <>
      <motion.div
        className="bg-slate-500 text-white text-2xl font-bold font-inter  w-20 text-center shadow-lg shadow-black rounded-xl m-auto z-20"
        initial={{ x: -200, y: -200 }}
        animate={{ x: 0, y: 0 }}
      >
        Hi
      </motion.div>
      <div className="fixed left-0 shadow-sm shadow-black w-[50px] h-[30px] rounded-r-2xl top-10 bg-white text-right z-2">
        <button onClick={() => setHidden(true)} className="mr-3 text-xl">
          x
        </button>
      </div>
      {hidden && (
        <Draggable>
          <div className="w-[400px] m-auto flex flex-col bg-slate-400 p-4 fixed">
            <button
              className="bg-slate-700 text-white w-9 h-9 text-2xl text-center"
              onClick={() => {
                setHidden(false);
              }}
            >
              X
            </button>
            <h1 className="w-full flex items-center justify-center text-2xl font-bold relative bottom-5 ">
              CALCULATOR
            </h1>
            <h1 className="w-full flex items-center justify-center text-2xl">
              Result: {count}
            </h1>
            <div className="flex flex-wrap p-2 bg-slate-100">
              <button className="p-1 m-[2px] bg-white" onClick={clicked}>
                Add(+)
              </button>

              <button className="p-1 m-[2px] bg-white" onClick={clickedMinus}>
                Substract(-)
              </button>
              {/* <button className="p-1 m-[2px] bg-white" onClick={clickedMinus}>
          Substract(-)
        </button> */}
              <button className="p-1 m-[2px] bg-white" onClick={multiply}>
                Multiply (*)
              </button>
              <button className="p-1 m-[2px] bg-white" onClick={divideCount}>
                Divide (/)
              </button>
              <button className="p-1 m-[2px] bg-white" onClick={percent}>
                Percent (%)
              </button>
            </div>
            <div>
              <p>History:</p>
              {history.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            {/* <p id="test">History{test.getElementById('history')}</p> */}
            <input
              type="text"
              placeholder="value"
              className="border-solid border-black border-2 rounded-md m-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <br />
            <button onClick={handleReset}>Reset</button>
            <button onClick={handlePopHistory}>Clear history by 1</button>
          </div>
        </Draggable>
      )}
    </>
  );
}
