import { React, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  //we dont need index here
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="w-full h-screen flex text-black items-center justify-center">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1; // it will start with one and add so it wont be like you hover one and its not hovered i thhink
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? "text-red-500" : "text-black"
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
