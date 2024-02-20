import React, { useState } from "react";
import '../Assignment/Counter.css'

const Constructor = () => {
  const [count, setCount] = useState(0); // usestate always two value return do.(array ) and your variable namre

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <div className="btn">
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default Constructor;
