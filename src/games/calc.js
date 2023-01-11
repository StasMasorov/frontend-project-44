import getRandom from '../utils.js';
import engine from '../index.js';

const rules = 'What is the result of the expression?';

const RandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandom(0, operators.length - 1)];
};

const calculate = (numb1, numb2, operator) => {
  let calcAnswer = '';
  if (operator === '+') {
    calcAnswer += String(numb1 + numb2);
  } else if (operator === '-') {
    calcAnswer += String(numb1 - numb2);
  } else if (operator === '*') {
    calcAnswer += String(numb1 * numb2);
  }
  return calcAnswer;
};

const generateRound = () => {
  const num1 = getRandom(1, 50);
  const num2 = getRandom(1, 50);
  const symb = RandomOperator();
  const question = `Question: ${num1} ${symb} ${num2}`;
  const answer = calculate(num1, num2, symb);
  return [question, answer];
};

export default () => {
  engine(rules, generateRound);
};
