import readlineSync from 'readline-sync';

function getRandom() {
  return Math.round(Math.random() * (99 - 1)) + 1;
}

const evengame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 1;
  while (i <= 3) {
    const num = getRandom();
    console.log(`Question: ${num}`);
    if (num % 2 === 0) {
      const answerNum = readlineSync.question('Your answer: ');
      if (answerNum === 'yes') {
        console.log('Correct!');
      } else if (answerNum === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        return console.log(`Let's try again, ${userName}!`);
      } else {
        console.log(`'${answerNum}' is wrong answer ;(. Correct answer was 'yes'.`);
        return console.log(`Let's try again, ${userName}!`);
      }
    } else if (num % 2 !== 0) {
      const answerNum = readlineSync.question('Your answer: ');
      if (answerNum === 'no') {
        console.log('Correct!');
      } else if (answerNum === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        return console.log(`Let's try again, ${userName}!`);
      } else {
        console.log(`'${answerNum}' is wrong answer ;(. Correct answer was 'no'.`);
        return console.log(`Let's try again, ${userName}!`);
      }
    }
    i += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evengame;
