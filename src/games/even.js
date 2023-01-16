import getRandom from '../utils.js';
import engine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const num = getRandom(1, 99);
  const question = `Question: ${num}`;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  engine(rules, generateRound);
};
