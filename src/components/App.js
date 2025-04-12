import { useState } from "react";
import { calculateSum } from "../utils/stringCalculator";
function App() {
  const [inputString, setInputString] = useState("");
  const [sum, setSum] = useState(0);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const result = calculateSum(inputString);
      setSum(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <textarea onChange={(e) => setInputString(e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      {error ? <div>{error}</div> : <div>Result: {sum}</div>}
    </div>
  );
}

export default App;
