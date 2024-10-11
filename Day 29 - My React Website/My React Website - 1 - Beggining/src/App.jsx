import { useState } from "react";
import "./index.css";
import Button from "./components/button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button />
      </div>
      <h1 className="text-3xl text-center">My Website</h1>
      <div className="align-middle w-7 h-4">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
