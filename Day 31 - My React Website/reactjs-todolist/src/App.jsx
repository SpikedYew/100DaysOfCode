import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/Todoinput";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Eat more protein",
    "Pick up groceries",
  ]);

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList); //Updates the DOM
  }
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
