import { ui } from "./utils/ui";

const inputIsValid = (input) => {
  return !isNaN(input);
};

const generateFibonacci = (limit) => {
  const firstNumber = 0,
    secondNumber = 1;
  const fibonacciSequence = [firstNumber, secondNumber];

  let penultimateNumber = firstNumber,
    lastNumber = secondNumber,
    currentNumber = 0;

  while (currentNumber < limit) {
    currentNumber = penultimateNumber + lastNumber;
    fibonacciSequence.push(currentNumber);
    penultimateNumber = lastNumber;
    lastNumber = currentNumber;
  }
  return fibonacciSequence;
};

const numberIsInFibonacci = (number) => {
  const fibonacciSequence = generateFibonacci(number);
  return fibonacciSequence.includes(number);
};

const printResult = (number, numberIsInFibonacci) => {
  const message = numberIsInFibonacci
    ? `The number ${number} IS in Fibonacci sequence.`
    : `The number ${number} is NOT in Fibonacci sequence.`;

  console.log(message);
};

const init = async () => {
  const USER_QUESION = `Enter a number to test if it is contained in the Fibonacci sequence: `;

  ui.question(USER_QUESION, (input) => {
    if (inputIsValid(input)) {
      const numberToTest = +input;
      const result = numberIsInFibonacci(numberToTest);
      printResult(numberToTest, result);
    } else {
      console.log(`Invalid input.`);
    }
    ui.close();
  });
};

init();
