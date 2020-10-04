import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(prev => prev + 1);
  const decrement2 = () => setCount(prev => prev - 1);

  const reset = () => setCount(0);

  const double = () => setCount(prev => prev * 2)

  const devide3 = () => setCount(prev => prev % 3 === 0 ? prev / 3 : prev)

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={double}>x2</button>
        <button onClick={devide3}>/3</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
