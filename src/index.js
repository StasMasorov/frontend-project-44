import readlineSync from 'readline-sync';

const roundsCount = 3;

export default function engine(rules, generateRound) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const result = generateRound();
    if (result[0] === result[1]) {
      console.log('Correct!');
    } else if (result[0] !== result[1]) {
      console.log(`'${result[1]}' is wrong answer ;(. Correct answer was '${result[0]}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
}
