import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;

  return (
    <div className="container  ">
      <li className="flex justify-center p-4">
        {children}
        <div>
          <button
            onClick={() => {
              handleEditTodo(index);
              alert("Edit Message");
            }}
          >
            <i class=" pl-2 fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              handleDeleteTodo(index);
            }}
          >
            <i class=" pl-2 fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    </div>
  );
}
