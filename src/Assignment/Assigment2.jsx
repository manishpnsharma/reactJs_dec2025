import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0); // Initialize count to 0
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1); // Use functional update for safety
  };
  const decrementCount = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // Prevent negative values
  };
  return (
    <>
      <div>
          <h3>Counter Demo</h3>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </>
  );
}
export default Counter;