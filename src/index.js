import readlineSync from 'readline-sync';

const generateRound = (round) => {
  const result = round();
  if (result[0] !== result[1]) {
    console.log(`'${result[1]}' is wrong answer ;(. Correct answer was '${result[0]}'.`);
    return false;
  }
  return console.log('Correct!');
};

export default function engine(rules, game) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const result = generateRound(game);
    if (result === false) {
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
}
