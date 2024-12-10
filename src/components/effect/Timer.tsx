import { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setCount((count) => count + 1), 1000);
  }, [count]);
  return <div>Timer - {count}</div>;
};

export default Timer;
