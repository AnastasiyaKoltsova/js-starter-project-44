import getRandomNumber from '../helpers/get-random.js';
import getRandomFromRangeOf from '../helpers/get-random-from-range.js';
import startGame from '../index.js';

const minProgLength = 5;
const maxProgLength = 10;
const minProgStep = 2;
const maxProgStep = 5;

const challenge = 'What number is missing in the progression?';

const getProgression = (length, step) => {
  const result = [];
  for (let i = getRandomNumber(); result.length < length; i += step) {
    result.push(i);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const progLength = getRandomFromRangeOf(minProgLength, maxProgLength);
  const progStep = getRandomFromRangeOf(minProgStep, maxProgStep);
  const progression = getProgression(progLength, progStep);
  const hiddenValueIndex = getRandomFromRangeOf(0, progression.length - 1);
  const correctAnswer = progression[hiddenValueIndex].toString();
  progression[hiddenValueIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(getQuestionAndAnswer, challenge);
