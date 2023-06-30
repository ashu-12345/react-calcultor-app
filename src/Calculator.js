import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEquals = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="keypad">
        <button className="button" onClick={() => handleClick('1')}>
          1
        </button>
        <button className="button" onClick={() => handleClick('2')}>
          2
        </button>
        <button className="button" onClick={() => handleClick('3')}>
          3
        </button>
        <button className="button operator" onClick={() => handleClick('+')}>
          +
        </button>
        <button className="button" onClick={() => handleClick('4')}>
          4
        </button>
        <button className="button" onClick={() => handleClick('5')}>
          5
        </button>
        <button className="button" onClick={() => handleClick('6')}>
          6
        </button>
        <button className="button operator" onClick={() => handleClick('-')}>
          -
        </button>
        <button className="button" onClick={() => handleClick('7')}>
          7
        </button>
        <button className="button" onClick={() => handleClick('8')}>
          8
        </button>
        <button className="button" onClick={() => handleClick('9')}>
          9
        </button>
        <button className="button operator" onClick={() => handleClick('*')}>
          ×
        </button>
        <button className="button" onClick={() => handleClick('0')}>
          0
        </button>
        <button className="button" onClick={() => handleClick('.')}>
          .
        </button>
        <button className="button equals" onClick={() => handleEquals()}>
          =
        </button>
        <button className="button operator" onClick={() => handleClick('/')}>
          ÷
        </button>
        <button className="button clear" onClick={() => handleClear()}>
          Clear
        </button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Calculator;
