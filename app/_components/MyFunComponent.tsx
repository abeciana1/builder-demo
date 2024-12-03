import { useState } from 'react';

export const MyFunComponent = (props: { text: string }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{props.text.toUpperCase()}</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count++)}>Click me</button>
    </div>
  );
};