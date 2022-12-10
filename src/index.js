import readlineSync from 'readline-sync';

const generateRound = (round) => {
  let i = 1;
  while (i <= 3) {
    const result = round();
    if (result[0] === result[1]) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${result[1]}' is wrong answer ;(. Correct answer was '${result[0]}'.`);
      return false;
    }
  }
  return true;
};

export default function engine(rules, game) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const result = generateRound(game);
  if (result === true) {
    console.log(`Congratulations, ${userName}!`);
  } else if (result === false) {
    console.log(`Let's try again, ${userName}!`);
  }
}
