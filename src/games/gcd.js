import readlineSync from 'readline-sync';
import getRandom from '../utils.js';

const gcd = (number1, number2) => {
  let x = Math.abs(number1);
  let y = Math.abs(number2);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  const result = x;
  return result;
};

const gcdngame = () => {
  const num1 = getRandom(100, 1);
  const num2 = getRandom(100, 1);
  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  const question = String(gcd(num1, num2));
  const result = [question, answer];
  return result;
};

export default gcdngame;
