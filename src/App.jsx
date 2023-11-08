import React from 'react'
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  
  const increaseHandler = () =>  setCounter(counter + 1);
  const decreaseHandler = () =>  setCounter(counter - 1);
  
  
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
    </div>
  )
}

export default App
