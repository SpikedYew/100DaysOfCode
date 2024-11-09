import "./App.css";
import "./index.css";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      {/* Rancom color Component */}
      <RandomColor />
      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
