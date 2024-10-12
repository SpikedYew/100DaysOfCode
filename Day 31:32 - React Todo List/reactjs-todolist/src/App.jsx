import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/Todoinput";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState(""); //get it here and passed it values to Todoinput

  //For loacl storage if we edit, add, or remove it will add it to storage so we have to create a function

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }
  //deconsstruct (...todos are previously added tasks, and newTodo is the one we added)

  //
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList); //Updates the DOM
  }

  //function to delete todo item
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  //Function to edit to do item
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }
  //square bracket is the dependency array, we put in it variable that we want to listen to changes. We could pas todos, but we live it empty, so it runs on page load

  /*
1. We have to check if local storage exist
*/
  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <div className="container max-w-sm px-4 py-4 bg-slate-200 drop-shadow-md rounded-md mt-10">
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </div>
  );
}

export default App;
