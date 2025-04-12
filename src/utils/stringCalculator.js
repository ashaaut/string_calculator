const hasCustomDelimiter = (input) => {
  return /^\/\//.test(input);
};

const getCustomDelimiter = (input) => {
  return input.charAt(2);
};

const getExpression = (input) => {
  return input.substring(3);
};

const validateNumbers=(numbersArray)=>{
    const negativeNumbers = numbersArray.filter((number) => number < 0);
    if (negativeNumbers.length) {
      throw new Error(`Negative numbers are not allowed: ${negativeNumbers.join(",")}`);
    }
}
export const calculateSum = (input) => {
  if (!input.trim()) {
    return 0;
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

  validateNumbers(numbersArray);

  let totalSum = numbersArray.reduce((acc, curr) => acc + curr, 0);
  return totalSum;
};
