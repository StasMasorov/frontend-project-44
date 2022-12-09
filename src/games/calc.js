import readlineSync from 'readline-sync';
import getRandom from '../utils.js';

function randomSymbol() {
  let symbol = '';
  const characters = '+-*';
  const charactersLength = characters.length;
  symbol = characters.charAt(Math.floor(Math.random() * charactersLength));
  return symbol;
}

const calcgame = (userName) => {
  console.log('What is the result of the expression?');
  let i = 1;
  while (i <= 3) {
    const num1 = getRandom(50, 1);
    const num2 = getRandom(50, 1);
    const symb = randomSymbol();
    console.log(`Question: ${num1} ${symb} ${num2}`);
    if (symb === '+') {
      const answerNum = readlineSync.question('Your answer: ');
      if (answerNum === String(num1 + num2)) {
        console.log('Correct!');
      } else if (answerNum !== String(num1 + num2)) {
        console.log(`'${answerNum}' is wrong answer ;(. Correct answer was '${num1 + num2}'.`);
        return console.log(`Let's try again, ${userName}!`);
      }
    } else if (symb === '-') {
      const answerNum = readlineSync.question('Your answer: ');
      if (answerNum === String(num1 - num2)) {
        console.log('Correct!');
      } else if (answerNum !== String(num1 - num2)) {
        console.log(`'${answerNum}' is wrong answer ;(. Correct answer was '${num1 - num2}'.`);
        return console.log(`Let's try again, ${userName}!`);
      }
    } else if (symb === '*') {
      const answerNum = readlineSync.question('Your answer: ');
      if (answerNum === String(num1 * num2)) {
        console.log('Correct!');
      } else if (answerNum !== String(num1 * num2)) {
        console.log(`'${answerNum}' is wrong answer ;(. Correct answer was '${num1 * num2}'.`);
        return console.log(`Let's try again, ${userName}!`);
      }
    }
    i += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default calcgame;
