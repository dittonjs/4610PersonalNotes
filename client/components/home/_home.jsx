import { useState } from 'react';
import { Button } from './button';

export const Home = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');


  return (
    <div>
      <h2 className="text-9xl">{count}</h2>
      <div>
        <input
          type="text"
          className="p-2 border-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};
