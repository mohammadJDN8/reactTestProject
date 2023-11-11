import React from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter((counter)=> counter + 1);
  }
  const increaseHandler3 = () => {
    setCounter((counter)=> counter + 3);
  }
  const stopHandler = () => {
    setCounter(0);}

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={stopHandler}>stop</button>
      <button onClick={increaseHandler}>1+</button>
      <button onClick={increaseHandler3}>3+</button>
    </div>
  );
}

export default App;
