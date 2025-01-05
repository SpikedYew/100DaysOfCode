import axios from "axios";
import { FC, useState } from "react";
import User from "./User";
import { AppProps, Users } from "./App.types";
import Input from "./Input";

const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      console.log(data);
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(users);

  return (
    <div className="p-4">
      <div className="text-2xl font-bold p-2">
        {users.length > 1 ? `Loaded ${users.length - 1} users` : "No users"}
      </div>
      <h1>{title}</h1>
      <button className="p-2 border border-white" onClick={handleClick}>
        {isLoading ? "Loading" : "Load"}
      </button>
      {isLoading && <p>Loading...</p>}
      <br />
      <ul>
        {/* We dont need Login in user.tsx because its here lol */}
        {users.map(({ login, name, email }) => {
          return <User key={login.uuid} x={login} name={name} email={email} />;
        })}
      </ul>

      <Input />
    </div>
  );
};

export default App;
