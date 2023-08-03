import React, { useState, useCallback, useMemo } from 'react';
import Child from './Child.js';
import './style.css';

export default function App() {
  const [localVar, setLocalvar] = useState(0);
  const [childVar, setChildVar] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 8, 6, 7, 8]);
  const getLargestNumber = () => {
    console.log('Largest number console');
    let temp = 0;
    arr.map((val) => (temp = temp > val ? temp : val));
    return temp;
  };
  const memoizedCallback = useCallback(() => incrementChildVariable(), []);
  const memoizedValue = useMemo(() => getLargestNumber(), [arr]);

  const incrementLocalVariable = () => {
    setLocalvar((prev) => prev + 1);
  };
  const incrementChildVariable = () => {
    setChildVar((prev) => prev + 1);
  };
  const changeArr = () => {
    setArr([59, 40, 30]);
  };

  return (
    <div>
      <h3>Local variable : {localVar}</h3>
      <button onClick={incrementLocalVariable}>Increment Local variable</button>
      <hr />
      <Child childVar={childVar} incrementChildVariable={memoizedCallback} />
      <hr />
      <div>
        <h2>
          Largest number in {arr} is {memoizedValue}
        </h2>
        <button onClick={changeArr}> Change Array </button>
      </div>
    </div>
  );
}
