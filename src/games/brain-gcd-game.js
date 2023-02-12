import getRandomNumber from '../helpers/get-random.js';
import startGame from '../index.js';

const challenge = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  if (y === 0) return x;
  return getGCD(y, x % y);
};

const getQuestionAndAnswer = () => {
  const firstValue = getRandomNumber();
  const secondValue = getRandomNumber();
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = getGCD(firstValue, secondValue).toString();
  return [question, correctAnswer];
};

export default () => startGame(getQuestionAndAnswer, challenge);
