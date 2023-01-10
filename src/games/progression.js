import getRandom from '../utils.js';
import engine from '../index.js';

const rules = 'What number is missing in the progression?';

const doArray = () => {
  const result = [];
  let i = 1;
  result[0] = getRandom(1, 50);
  const step = getRandom(1, 15);
  while (i <= 9) {
    result[i] = result[i - 1] + step;
    i += 1;
  }
  return result;
};

const generateRound = () => {
  const array = doArray();
  const num = getRandom(1, 9);
  const hiddenNum = array[num];
  array[num] = '..';
  const newArray = array.join(' ');
  console.log(`Question: ${newArray}`);
  const question = String(hiddenNum);
  const result = question;
  return result;
};

export default () => {
  engine(rules, generateRound);
};
