import "./App.css";
import { useState,useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    alert('you changed counter to : ' + count);
  },[count])
  return (
    <div className="App">
      <button onClick={()=> setCount((prevCount)=> prevCount + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount((prevCount)=> count > 0 ? prevCount - 1 : prevCount)}>-</button>
    </div>
  );
};

export default App;
