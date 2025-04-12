import { useState } from "react";

function App() {
  const [inputString, setInputString] = useState("");
  const [sum, setSum] = useState(0);

  const calculateSum = (input) => {
    if (!input.trim()) {
      setSum(0);
      return;
    }
    const numbersArray = input.split(",").map((number) => parseInt(number));
    let totalSum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    setSum(totalSum);
  };
  return (
    <div className="App">
      <input onChange={(e) => setInputString(e.target.value)} />
      <button onClick={() => calculateSum(inputString)}>Calculate</button>
      <div>Result: {sum}</div>
    </div>
  );
}

export default App;
