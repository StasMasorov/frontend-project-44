import getRandom from '../utils.js';
import engine from '../index.js';

const rules = 'What is the result of the expression?';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandom(0, operators.length - 1)];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return String(num1 + num2);
    case '-': return String(num1 - num2);
    case '*': return String(num1 * num2);
    default: throw new Error(`Operator ${operator} - is invalid`);
  }
};

const generateRound = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const operator = randomOperator();
  const question = `Question: ${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator);
  return [question, answer];
};

export default () => {
  engine(rules, generateRound);
};
