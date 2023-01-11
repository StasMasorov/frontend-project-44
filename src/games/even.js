import getRandom from '../utils.js';
import engine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (numb) => {
  let result;
  if (numb % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const generateRound = () => {
  const num = getRandom(1, 99);
  const question = `Question: ${num}`;
  const answer = isEven(num);
  return [question, answer];
};

export default () => {
  engine(rules, generateRound);
};
