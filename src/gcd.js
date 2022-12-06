import readlineSync from 'readline-sync';

function getRandom() {
    return Math.round(Math.random() * (100 - 1)) + 1;
};

const gcd = (x, y) => {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  };

const gcdngame = () => {
    console.log('Find the greatest common divisor of given numbers.');
    let i = 1;
    while (i <= 3) {
        const num1 = getRandom();
        const num2 = getRandom();
        console.log(`Question: ${num1} ${num2}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === String(gcd(num1, num2))) {
            console.log('Correct!');
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${String(gcd(num1, num2))}'.`);
            return "Let's try again, name!";
        }
        i += 1;
    }
    return 'Congratulations, name!';
};

export default gcdngame;