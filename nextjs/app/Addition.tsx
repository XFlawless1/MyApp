import React, { useState } from 'react';
import { add } from './calculator'; // Importing add function from calc.js

const Addition = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleAddition = () => {
    const num1Value = parseInt(num1);
    const num2Value = parseInt(num2);
    if (!isNaN(num1Value) && !isNaN(num2Value)) {
      setResult(add(num1Value, num2Value)); // Using the add function from calc.js
    } else {
      setResult(null);
    }
  };

  const inputStyle = {
    color: 'black',
  };

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="mb-8 flex gap-4">
        <input
          type="number"
          className="border rounded p-2"
          placeholder="Enter number 1"
          style={inputStyle}
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          className="border rounded p-2"
          placeholder="Enter number 2"
          style={inputStyle}
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
          onClick={handleAddition}
        >
          Add
        </button>
      </div>
      {result !== null && (
        <div className="mb-8 text-xl">
          Result: {num1} + {num2} = {result}
        </div>
      )}
    </div>
  );
};

export default Addition;
