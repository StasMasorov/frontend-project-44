import readlineSync from 'readline-sync';

const getRandom = (max) => {
    return Math.round(Math.random() * (max - 2)) + 1;
  };

  const primegame = (userName) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let i = 1;
    while (i <= 3) {
        const num = getRandom(1000);
        console.log(`Question: ${num}`);
        let j = 2;
        let rightAnswer = 'yes';
        while (j < num) {
            if (num % j === 0) {
                rightAnswer = 'no';
            }
            j += 1;
        }
        const answerNum = readlineSync.question('Your answer: ');
            if (answerNum === rightAnswer) {
                console.log('Correct!');
            }
            else {
                console.log(`'${answerNum}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
                return  console.log(`Let's try again, ${userName}!`);
            }
            i += 1;
        }
        return console.log(`Congratulations, ${userName}!`);
    };  

export default primegame;