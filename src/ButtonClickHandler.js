import React, { useState } from 'react';

export default function ButtonClickHandler() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>React Button Click events in functional component</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick} style={{ margin: '5px', padding: '10px' }}>
        Click Me
      </button>
      <button onClick={handleReset} style={{ margin: '5px', padding: '10px' }}>
        Reset
      </button>
    </div>
  );
}
