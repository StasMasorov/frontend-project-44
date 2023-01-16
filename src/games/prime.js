import getRandom from '../utils.js';
import engine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numb) => {
  let j = 2;
  while (j < numb) {
    if (numb % j === 0) {
      return false;
    }
    j += 1;
  }
  return true;
};

const generateRound = () => {
  const num = getRandom(2, 1000);
  const question = `Question: ${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  engine(rules, generateRound);
};
