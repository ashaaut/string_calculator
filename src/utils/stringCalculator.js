const hasCustomDelimiter = (input) => {
  return /^\/\//.test(input);
};

const getCustomDelimiter = (input) => {
  return input.charAt(2);
};

const getExpression = (input) => {
  return input.substring(3);
};

const validateNumbers = (numbersArray) => {
  const negativeNumbers = numbersArray.filter((number) => number < 0);
  if (negativeNumbers.length) {
    throw new Error(
      `Negative numbers are not allowed: ${negativeNumbers.join(",")}`
    );
  }
};
const escapeRegExp = (customDelimiter) => {
  return customDelimiter.replace(/[.*+?^$]/g, "\\$&");
};

const getNumbersArray = (expression, delimiterRegex) => {
  return expression
    .split(delimiterRegex)
    .map((number) => parseInt(number))
    .filter((number) => number <= 1000);
};

export const calculateSum = (input) => {
  if (!input.trim()) {
    return 0;
  }
  let delimiterRegex = /,|\n/g;
  let expression = input;

  if (hasCustomDelimiter(input)) {
    let customDelimiter = getCustomDelimiter(input);
    delimiterRegex = new RegExp(escapeRegExp(customDelimiter), "g");
    expression = getExpression(input);
  }
  const numbersArray = getNumbersArray(expression, delimiterRegex);

  validateNumbers(numbersArray);

  let totalSum = numbersArray.reduce((acc, curr) => acc + curr, 0);
  return totalSum;
};
