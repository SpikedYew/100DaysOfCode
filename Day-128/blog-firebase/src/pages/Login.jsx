import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// firebase gives us lot of options of login
export default function Login({ setIsAuth }) {
  let navigate = useNavigate();

  // result is info of user
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      //state to determin if we are anthenticated or not?
      Cookies.set("isAuth", "true", { expires: 7 });
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
      //useLocal storage
    });
  };
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg text-center">
        <p className="text-lg font-medium text-white mb-4">
          Sign in with Google to continue
        </p>
        <button
          onClick={signInWithGoogle}
          className="w-full p-2 text-sm text-white border border-white bg-black hover:text-black hover:bg-white hover:border-black rounded-lg transition duration-300"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
