import { useState } from "react";

function App() {
  const [inputString, setInputString] = useState("");
  const [sum, setSum] = useState(0);

  const calculateSum = (input) => {
    if (!input.trim()) {
      setSum(0);
      return;
    }

    const numbersArray = input
      .split(/[\n,]+/)
      .map((number) => parseInt(number));
    let totalSum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    setSum(totalSum);
  };

  return (
    <div className="App">
      <textarea
        type="text"
        onChange={(e) => setInputString(e.target.value)}
        rows={5}
        cols={40}
      />
      <button onClick={() => calculateSum(inputString)}>Calculate</button>
      <div>Result: {sum}</div>
    </div>
  );
}

export default App;
