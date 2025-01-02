// import { StrictMode } from "react";

// Deleted strictMode because we dont want useEffect to execite twice (this happends in developmend in react 18)
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <App title="TypeScript Demo" />
  // </StrictMode>
);
