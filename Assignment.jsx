import React, { useState } from "react";

const Constructor = () => {
  const [count, setCount] = useState(0); // usestate always two value return do.(array ) and your variable namre
  

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      {/* {renderSnakes()} */}
    </div>
  );
};

export default Constructor;
