import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="mt-5 bg-white w-full text-center shadow-md outline rounded-md outline-zinc-500">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
