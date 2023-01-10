import { calculate, getRandom } from '../utils.js';
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
  console.log(`Question: ${num1} ${symb} ${num2}`);
  const result = calculate(num1, num2, symb);
  return result;
};

export default () => {
  engine(rules, generateRound);
};
