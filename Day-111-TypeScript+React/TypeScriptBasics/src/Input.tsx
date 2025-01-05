import { useState } from "react";

const Input = () => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange}></input>
      <div>{username}</div>
      <button
        className="border p-2 rounded-xl"
        onClick={() => setText(username)}
      >
        Set Text
      </button>
      <div>{text}</div>
    </>
  );
};
export default Input;
