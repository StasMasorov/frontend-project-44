import readlineSync from 'readline-sync';

const getRandom = (max) => {
  return Math.round(Math.random() * (max - 1)) + 1;
};

const doArray = () => {
  const result = [];
  let i = 1;
  result[0] = getRandom(50);
  const step = getRandom(15);
  while (i <= 9) {
    result[i] = result[i - 1] + step;
    i += 1;
  }
  return result;
};

const proggame = (userName) => {
  console.log('What number is missing in the progression?');
  let i = 1;
  while (i <= 3) {
    const array = doArray();
    const num = getRandom(9);
    const hiddenNum = array[num];
    array[num] = '..';
    const newArray = array.join(' ');
    console.log(`Question: ${newArray}`);
    const answerNum = readlineSync.question('Your answer: ');
    if (answerNum === String(hiddenNum)) {
      console.log('Correct!');
    }
    else {
      console.log(`'${answerNum}' is wrong answer ;(. Correct answer was '${hiddenNum}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    i += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default proggame;
