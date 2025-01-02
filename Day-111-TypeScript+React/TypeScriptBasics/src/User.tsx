import { FC } from "react";
import { Name, Login } from "./App.types";
import { useState } from "react";

//That's why it's good to declare separate types for each nested property, so we can reuse them elsewhere.

interface UserProps {
  name: Name;
  email: string;
  x: Login;
}
const User: FC<UserProps> = ({ x, name, email }) => {
  const [hidden, setHidden] = useState<boolean>(false);
  return (
    <li>
      <button onClick={() => setHidden(!hidden)}>Click to see</button>
      {hidden && `--${x.uuid}--`}
      <hr />
      <div>
        Name: {name.first} {name.last}
      </div>
      <div>Email: {email}</div>
    </li>
  );
};

export default User;
