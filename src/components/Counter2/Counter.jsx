import { useState } from "react";

useState;
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setTimeout(() => {
      setCount(1);
    }, 500);
  }

  return (
    <>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
    </>
  );
}
export default Counter;
