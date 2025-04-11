import { useState } from "react";

function App() {
  const [inputString, setInputString] = useState("");
  const [sum, setSum] = useState(0);

  const calculateSum = (input) => {
    if (!input.trim()) {
      setSum(0);
      return;
    }

    const delimiter =
      !isNaN(input[0]) || input[0] === "-" ? /[\n,]+/ : input[0];
    console.log(input[0]);

    const numbersArray = input
      .split(delimiter)
      .map((number) => parseInt(number));

    const validNumbers = numbersArray.filter((number) => !isNaN(number));

    const negativeNumbers = validNumbers.filter((number) => number < 0);
    if (negativeNumbers.length > 0) {
      alert("Negative numbers are not allowed: " + negativeNumbers.join(","));
      setSum(0);
      return;
    }

    let totalSum = validNumbers.reduce((acc, curr) => acc + curr, 0);
    setSum(totalSum);
  };

  return (
    <div className="App">
      <textarea type="text" onChange={(e) => setInputString(e.target.value)} />
      <button onClick={() => calculateSum(inputString)}>Calculate</button>
      <div>Result: {sum}</div>
    </div>
  );
}

export default App;
