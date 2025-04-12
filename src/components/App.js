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
    <div className="flex flex-col items-center my-16">
      <h1 className="font-bold text-3xl">String Calculater</h1>
      <div className="m-4 p-4 flex flex-col items-center border border-gray-100 w-1/3 shadow-lg  ">
        <div className="flex">
          <textarea
            className="border border-gray-400 p-2  rounded-lg"
            type="text"
            onChange={(e) => setInputString(e.target.value)}
          />
          <button
            className="bg-gray-300  rounded-lg m-2 px-2 text-lg"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>
        {error ? (
          <div className="text-red-500 mt-2">{error}</div>
        ) : (
          <div className="text-lg font-bold my-4">Result: {sum}</div>
        )}
      </div>
    </div>
  );
}

export default App;
