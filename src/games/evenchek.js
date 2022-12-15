import readlineSync from 'readline-sync';
import getRandom from '../utils.js';

const generateRound = () => {
  const num = getRandom(99, 1);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  let question = '';
  if (num % 2 === 0) {
    question += 'yes';
  } else {
    question += 'no';
  }
  const result = [question, answer];
  return result;
};

export default generateRound;
