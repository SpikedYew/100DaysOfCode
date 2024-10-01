import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  const btn: string = "Click Me!";
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello World<span> Siemka</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>

      <ListGroup
        items={items}
        heading="⬇ List"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
