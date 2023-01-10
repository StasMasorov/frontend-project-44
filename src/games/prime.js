import { getRandom } from '../utils.js';
import engine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const num = getRandom(2, 1000);
  console.log(`Question: ${num}`);
  let j = 2;
  let question = 'yes';
  while (j < num) {
    if (num % j === 0) {
      question = 'no';
      const result = question;
      return result;
    }
    j += 1;
  }
  const result = question;
  return result;
};

export default () => {
  engine(rules, generateRound);
};
