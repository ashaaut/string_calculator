import { useState } from "react";

function App() {
  const [inputString, setInputString] = useState("");
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    setSum(0);
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
