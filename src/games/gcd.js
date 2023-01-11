import getRandom from '../utils.js';
import engine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (number1, number2) => {
  let x = Math.abs(number1);
  let y = Math.abs(number2);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const generateRound = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `Question: ${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return [question, answer];
};

export default () => {
  engine(rules, generateRound);
};
