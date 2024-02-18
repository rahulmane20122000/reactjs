import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };
  return (
    <div className="App">
      <button onClick={()=> setCount((prevCount)=> prevCount + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount((prevCount)=> count > 0 ? prevCount - 1 : prevCount)}>-</button>
    </div>
  );
};

export default App;
