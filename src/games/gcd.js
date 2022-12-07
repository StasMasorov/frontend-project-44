import readlineSync from 'readline-sync';

function getRandom() {
  return Math.round(Math.random() * (100 - 1)) + 1;
}

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

const gcdngame = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 1;
  while (i <= 3) {
    const num1 = getRandom();
    const num2 = getRandom();
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(gcd(num1, num2))) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${String(gcd(num1, num2))}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    i += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gcdngame;
