# Build 4 Project in 5 Hours | Zero to Hero YT Tutorial

-> link: https://www.youtube.com/watch?v=82PXenL4MGg

# Notes

-> We deleted App.css we dont need it

-> TodoCard will be a component inside of TodoList

-> `rfc` creates base for a component

-> We write everything in App.jsx it hets rendered in main.jsx / It fetches the div#root and throws react code insite the root

# Start

-> We create input to Add task to ToDo in TodoInput.jsx

-> In TodoList we demonstrate how to do list will actually look like

-> In TodoList we add
`    <ul>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p> //<- Here we add the paragraph that has our toDo. <- This is the child element
          </TodoCard> //<- This is the parent Element
        );
      })}
    </ul>`

-> If we want to render children content in component we have to go to component

-> In this case TodoCard.jsx

# In TodoCard.jsx

`
import React from "react";

export default function TodoCard(props) { //<- Here we added props
const { children } = props; //<- Here we deconstructed children element
return (

<div>
    <li className="todoItem">
        {children} //<- Here the children element gets displayed
        <div className="">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-regular fa-trash-can"></i>
        </div>
    </li>
</div>
);
}`

-> Now what if we want Props to be passed from App.jsx to different components?

# In App.jsx

`function App() {
  let todos = ["Go to the gym", "Eat more protein", "Pick up groceries"];
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
}` < - Here we Added the let todos from previous TodoList

-> And now we need to pass it ass component tag

# In App.jsx

`<TodoList todos={todos} />`

# In TodoList.jsx

`export default function TodoList(props) {
  const { todos } = props;
 `
we passed props into the component in (props)
and deconstructed { todos } from it

# useState in App.jsx

-> useState how to write it?

-> We write it
`const [nameOfProp, setNameOfProp] = useState(); <- also when doing it we need to import it at the top of file.`

We can leave () in useState as null ( default value ) but we are gonna pass an array

`
import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/Todoinput";

function App() {
const [todos, setTodos] = useState([
"Go to the gym",
"Eat more protein",
"Pick up groceries",
]);
return (
<>
<TodoInput />
<TodoList todos={todos} />
</>
);
}

export default App;

`
-> We got rid of array and passed it as default value (it will be empty when we load the To Do List)

// min 27:49

-> We create handleAddTodos function that updates the ToDoList
-> When the state changes the dom gets updated

# In TodoInput

onChange function listens to events
it takes (e) as argument and setTodoValue(e.target.value) -> Is the new stuff we add to todos

`
import { useState } from "react"; <- Imported State>

export default function TodoInput(props) {
const { handleAddTodos } = props;
const [todoValue, setTodoValue] = useState(""); <- Set to none as default
return (
<div>
<input
value={todoValue} <- We need to set this
onChange={(e) => setTodoValue(e.target.value)}
placeholder="Enter todo..."
/>
<button onClick={() => handleAddTodos(todoValue)}>Add</button>
</div>
);
}
`

// 30:33 min into Tutorial
