import React from "react";
function handler() {
  return alert("Hello!");
}
const Button = () => {
  return (
    <div>
      <button className="buttonTest" onClick={handler}>
        Siemka
      </button>
    </div>
  );
};

export default Button;
