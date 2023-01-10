import getRandom from '../utils.js';
import engine from '../index.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandom(0, operators.length - 1)];
};

const generateRound = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const symb = getRandomOperator();
  let question = '';
  console.log(`Question: ${num1} ${symb} ${num2}`);
  if (symb === '+') {
    question += String(num1 + num2);
  } else if (symb === '-') {
    question += String(num1 - num2);
  } else if (symb === '*') {
    question += String(num1 * num2);
  }
  const result = question;
  return result;
};

export default () => {
  engine(rules, generateRound);
};
