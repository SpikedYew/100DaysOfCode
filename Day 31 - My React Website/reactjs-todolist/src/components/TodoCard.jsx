import React from "react";

export default function TodoCard(props) {
  const { children } = props;
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-regular fa-trash-can"></i>
        </div>
      </li>
    </div>
  );
}
