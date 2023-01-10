import { getRandom } from '../utils.js';
import engine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const num = getRandom(1, 99);
  console.log(`Question: ${num}`);
  let question = '';
  if (num % 2 === 0) {
    question += 'yes';
  } else {
    question += 'no';
  }
  const result = question;
  return result;
};

export default () => {
  engine(rules, generateRound);
};
