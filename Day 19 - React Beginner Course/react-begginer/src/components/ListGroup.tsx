import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // (item : string) => void
  onSelectItem: (item: string) => void; // onclick
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //   let selectedIndex = 0; // 0 item nr1 is selected, is -1 no item is selected :D
  // Hook - tap buuld in features in react// we can tell components that have data and state
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   arr[0]; //variable(selectedIndex)
  //   arr[1]; // updater function

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };

  //{items.length === 0 ? <p>No item found</p> : null} -- this  is how react developers display dynamic component

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li> //key is added because react needs to know where there is a key, and we put it in li
        ))}
      </ul>
    </> //We have to wrap it because react doesnt return more than one component // also we have to put items.map(xyz.. intro { } because that is what raect want
  );
}

export default ListGroup;
