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
  const step = getRandom(2, 15);
  const progression = makeProgression(firstNum, step, 10);
  const hiddenIndex = getRandom(1, 9);
  const hiddenNum = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  const answer = String(hiddenNum);
  return [question, answer];
};

export default () => {
  engine(rules, generateRound);
};
