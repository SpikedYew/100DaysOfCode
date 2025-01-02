import axios from "axios";
import { FC, useEffect, useState } from "react";
import User from "./User";
import { AppProps, Users } from "./App.types";

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
  // useEffect(() => {
  //   const handleClick = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get(
  //         "https://randomuser.me/api/?results=10"
  //       );
  //       console.log(data);
  //       setUsers(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   handleClick();
  //   // const getUsers = async () => {
  //   //   try {
  //   //     setLoading(true);
  //   //     const { data } = await axios.get(
  //   //       "https://randomuser.me/api/?results=10"
  //   //     );
  //   //     console.log(data);
  //   //     setUsers(data.results);
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   } finally {
  //   //     setLoading(false);
  //   //   }
  //   // };
  //   // getUsers();
  // }, []);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Load Users</button>
      {isLoading && <p>Loading...</p>}
      <br />
      <ul>
        {/* We dont need Login in user.tsx because its here lol */}
        {users.map(({ login, name, email }) => {
          return <User key={login.uuid} x={login} name={name} email={email} />;
        })}
      </ul>
    </div>
  );
};

export default App;
