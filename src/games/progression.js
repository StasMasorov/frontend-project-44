import getRandom from '../utils.js';
import engine from '../index.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (firstNumb, stepNumb, length) => {
  const result = [];
  let i = 1;
  result[0] = firstNumb;
  const step = stepNumb;
  while (i <= length) {
    result[i] = result[i - 1] + step;
    i += 1;
  }
  return result;
};

const generateRound = () => {
  const firstNum = getRandom(1, 50);
  const step = getRandom(1, 15);
  const array = makeProgression(firstNum, step, 10);
  const num = getRandom(1, 9);
  const hiddenNum = array[num];
  array[num] = '..';
  const newArray = array.join(' ');
  const question = `Question: ${newArray}`;
  const answer = String(hiddenNum);
  return [question, answer];
};

export default () => {
  engine(rules, generateRound);
};
