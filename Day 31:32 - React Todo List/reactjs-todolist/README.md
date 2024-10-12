# Build 4 Project in 5 Hours | Zero to Hero YT Tutorial

-> link: https://www.youtube.com/watch?v=82PXenL4MGg

# Notes

-> We deleted App.css we dont need it

-> TodoCard will be a component inside of TodoList

-> `rfc` creates base for a component

-> We write everything in App.jsx it gets rendered in main.jsx / It fetches the div#root and throws react code insite the root

# Start

-> We create input to Add task to ToDo in TodoInput.jsx

-> In TodoList we demonstrate how to do list will actually look like

-> In TodoList we add

<!-- `    <ul> -->

      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p> //<- Here we add the paragraph that has our toDo. <- This is the child element
          </TodoCard> //<- This is the parent Element
        );
      })}
    <!-- </ul>` -->

-> If we want to render children content in component we have to go to component

-> In this case TodoCard.jsx

# In TodoCard.jsx

`
import React from "react";

export default function TodoCard(props) { //<- Here we added props
const { children } = props; //<- Here we deconstructed children element
return (

<!-- <div> -->

    <li className="todoItem">
        {children} //<- Here the children element gets displayed
        <div className="">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-regular fa-trash-can"></i>
        </div>
    </li>

<!-- </div> -->

);
}
`

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

# Installing ShadCD for styling / tailwind

-> https://ui.shadcn.com/docs/installation/vite

-> Install tail wind css
`npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
`
-> edit confing vite.config.js

`import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
resolve: {
alias: {
"@": path.resolve(\_\_dirname, "./src"),
},
},
})
`

-> Create folder named jsconfig.json and pass this code

`{
   "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": [
           "./src/*"
         ]
       }
   }
}
`

-> instal tailwind (i needed to check it) https://tailwindcss.com/docs/guides/vite

-> And import
`@tailwind base;
@tailwind components;
@tailwind utilities;` into index.css

# Initializing ShadCN

-> Install ShadCN
`npx shadcn@latest init`

-> We use default not New York

-> At this point we only installed ShadCN

# Building with tailwind

-> https://tailwindcss.com/docs

-> I made the styling with tailwind

# Back to the coding

# In App.jsx

-> We can get rid of

"[Go to the gym", "Eat more protein", "Pick up groceries"]"

# In TodoInput

-> We get rid f value that we inputed when we click add
How to do it?

`onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}`

-> we add function setTodoValue('') as empty string

# In App.jsx

-> We set function to delete todo and to edit it

`function handleDeleteTodo(index) {
// here we handle if we want the item to be saved into new array

if todoLindex is not equal to index it is allowed to stay in the array

const newTodoList = todos.filter(() => {
return todoIndex != index
// Then we call the function to update the list
setTodoList(newTodoList)
})
}
function handleEditTodo(index) {

}`

-> Now we need to pass the function where the buttons are

-> we pass it into <TodoList as new function>
-> so we can use it later in component

`<TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />`

# In TodoList.jsx

-> We need to destructure it in props
-> Then we pass it into TodoCard.jsx

`<TodoCard {...props} /*right here */ key={todoIndex}>`

# In todoCard.jsx

-> we need to add it to props as handleDeleteButton
`const { children, handleDeleteTodo } = props;`
-> we need to wrap icons inside buttons
`          <button>
            <i class=" pl-2 fa-solid fa-pen-to-square"></i>
          </button>
          <button>
            <i class=" pl-2 fa-regular fa-trash-can"></i>
          </button>`

-> we pass the function into button

`onClick={() => {
              handleDeleteTodo();
            }}`

# In TodoList.jsx

-> we need to pass index into TodoCard
`index={todoIndex}`

# In TodoCard.jsx

-> receive the index in props
{ x, x, index}

# In App.jsx

-> dont forget to pass const newTodoList = todos.filter((todo, todoIndex)
to filter

# Editing the todo item

tricky because TodoList.jsx is at the same lvl as TodoInput.jsx so we need to add common directory in App.jsx

# In App.jsx

-> pass both values in todoInput setTodoValue and setTodo

-> const [todoValue, setTodoValue] = useState(""); //get it here and passed it values to Todoinput

-> We pass todoEditValue into TodoList

# In TodoInput.jsx

// const [todoValue, setTodoValue] = useState(""); // Empty string as default //got rid of this and passed it into app.jsx so we can use it in todocard and input

# Storing localy the tasks we added to todo list

-> Use local Storage

-> useEffect - listens to events and run code when different events happen

# In App.jsx

1.  We have to check if local storage exist
    \*/
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

2.  //For loacl storage if we edit, add, or remove it will add it to storage so we have to create a function

function persistData(newList) {
localStorage.setItem("todos", JSON.stringify({ todos: newList }));
}

3. persistData(newTodoList) - > add this in handleAddTodo and handleDeleteTodo
