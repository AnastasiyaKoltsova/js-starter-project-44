import getRandomFromRangeOf from '../helpers/get-random-from-range.js';
import getRandomNumber from '../helpers/get-random.js';
import startGame from '../index.js';

const operators = ['-', '+', '*'];
const challenge = 'What is the result of the expression?';

const getCalc = (a, b, operator) => {
  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      throw new Error('invalid expression');
  }
};

const getQuestionAndAnswer = () => {
  const firstValue = getRandomNumber();
  const secondValue = getRandomNumber();
  const operator = operators[getRandomFromRangeOf(0, operators.length - 1)];
  const question = `${firstValue} ${operator} ${secondValue}`;
  const correctAnswer = getCalc(firstValue, secondValue, operator).toString();
  return [question, correctAnswer];
};

export default () => startGame(getQuestionAndAnswer, challenge);
