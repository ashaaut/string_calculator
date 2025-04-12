import { useState } from "react";

function App() {
  const [inputString, setInputString] = useState("");
  const [sum, setSum] = useState(0);

  const hasCustomDelimiter = (input) => {
    return /^\/\//.test(input);
  };

  const getCustomDelimiter = (input) => {
    return input.charAt(2);
  };

  const getExpression = (input) => {
    return input.substring(3);
  };

  const calculateSum = (input) => {
    if (!input.trim()) {
      setSum(0);
      return;
    }
    let delimiter = /,|\n/g;
    let expression = input;

    if (hasCustomDelimiter(input)) {
      delimiter = new RegExp(getCustomDelimiter(input), "g");
      expression = getExpression(input);
    }
    const numbersArray = expression
      .split(delimiter)
      .map((number) => parseInt(number));

    let totalSum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    setSum(totalSum);
  };

  return (
    <div className="App">
      <textarea onChange={(e) => setInputString(e.target.value)} />
      <button onClick={() => calculateSum(inputString)}>Calculate</button>
      <div>Result: {sum}</div>
    </div>
  );
}

export default App;
