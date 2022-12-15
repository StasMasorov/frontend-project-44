import readlineSync from 'readline-sync';
import getRandom from '../utils.js';

const doArray = () => {
  const result = [];
  let i = 1;
  result[0] = getRandom(50, 1);
  const step = getRandom(15, 1);
  while (i <= 9) {
    result[i] = result[i - 1] + step;
    i += 1;
  }
  return result;
};

const generateRound = () => {
  const array = doArray();
  const num = getRandom(9, 1);
  const hiddenNum = array[num];
  array[num] = '..';
  const newArray = array.join(' ');
  console.log(`Question: ${newArray}`);
  const answer = readlineSync.question('Your answer: ');
  const question = String(hiddenNum);
  const result = [question, answer];
  return result;
};

export default generateRound;
