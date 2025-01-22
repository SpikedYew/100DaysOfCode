import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { useState } from "react";
import { signOut } from "firebase/auth";
import CookiesConsent from "./CookiesConsent";
import { auth } from "./firebase-config";

function App() {
  //from login pass it as props to login (for function to sign in with google)
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      // we cant use useNavigate hook outside of (navbar component)
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <nav className="w-full bg-black text-white">
        <ul className="flex p-4">
          <li className="mr-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>

          {!isAuth ? (
            <li className="mr-4">
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </li>
          ) : (
            <>
              <li className="mr-4">
                <button
                  onClick={signUserOut}
                  className="text-white hover:underline"
                  aria-label="Log out"
                >
                  Log Out
                </button>
              </li>
              <li className="mr-4">
                <Link to="/createpost" className="hover:underline">
                  Create Post
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route
          path="/createpost"
          element={
            isAuth ? <CreatePost isAuth={isAuth} /> : <Navigate to="/login" />
          }
        />
      </Routes>
      <CookiesConsent />
    </Router>
  );
}

export default App;
