import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  // const [todoValue, setTodoValue] = useState(""); // Empty  string as default //got rid of this and passed it into app.jsx so we can use it in todocard and input
  return (
    <div className="container w-full text-center">
      <input
        className="rounded-xl p-1 m-2 shadow-sm"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter todo..."
      />
      <button
        className="bg-red-500 text-white pt-1 pb-1 pl-2 pr-2 rounded-xl shadow-sm"
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </div>
  );
}
