import getRandom from '../utils.js';
import engine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numb) => {
  let result = 'yes';
  let j = 2;
  while (j < numb) {
    if (numb % j === 0) {
      result = 'no';
      return result;
    }
    j += 1;
  }
  return result;
};

const generateRound = () => {
  const num = getRandom(2, 1000);
  const question = `Question: ${num}`;
  const answer = isPrime(num);
  return [question, answer];
};

export default () => {
  engine(rules, generateRound);
};
