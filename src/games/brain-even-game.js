// eslint-disable-next-line import/no-unresolved
import getRandomNumber from '../helpers/get-random.js';
import startGame from '../index.js';

const challenge = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(getQuestionAndAnswer, challenge);
