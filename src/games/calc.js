import readlineSync from 'readline-sync';
import getRandom from '../utils.js';

function randomSymbol() {
  let symbol = '';
  const characters = '+-*';
  const charactersLength = characters.length;
  symbol = characters.charAt(Math.floor(Math.random() * charactersLength));
  return symbol;
}

const calcgame = () => {
  const num1 = getRandom(50, 1);
  const num2 = getRandom(50, 1);
  const symb = randomSymbol();
  let question = '';
  console.log(`Question: ${num1} ${symb} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  if (symb === '+') {
    question += String(num1 + num2);
  } else if (symb === '-') {
    question += String(num1 - num2);
  } else if (symb === '*') {
    question += String(num1 * num2);
  }
  const result = [question, answer];
  return result;
};

export default calcgame;
