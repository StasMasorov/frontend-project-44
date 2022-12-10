import readlineSync from 'readline-sync';
import getRandom from '../utils.js';

const primegame = () => {
  const num = getRandom(1000, 2);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let j = 2;
  let question = 'yes';
  while (j < num) {
    if (num % j === 0) {
      question = 'no';
      const result = [question, answer];
      return result;
    }
    j += 1;
  }
  const result = [question, answer];
  return result;
};

export default primegame;
