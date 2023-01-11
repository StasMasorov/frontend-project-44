import readlineSync from 'readline-sync';

const roundsCount = 3;

export default function engine(rules, generateRound) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const generateRoundResult = generateRound();
    const rightAnswer = generateRoundResult[1];
    console.log(generateRoundResult[0]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
}
