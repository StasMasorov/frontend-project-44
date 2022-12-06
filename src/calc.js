import readlineSync from 'readline-sync';

function getRandom() {
    return Math.round(Math.random() * (50 - 1)) + 1;
};

function randomSymbol() {
    let symbol = '';
    const characters = '+-*';
    var charactersLength = characters.length;
        symbol = characters.charAt(Math.floor(Math.random() * charactersLength));
    return symbol;
}

const calcgame = () => {
    console.log('What is the result of the expression?');
    let i = 1;
    while (i <= 3) {
        const num1 = getRandom();
        const num2 = getRandom();
        const symb = randomSymbol();
        console.log(`Question: ${num1} ${symb} ${num2}`);
        if (symb === '+') {
            const answerNum = readlineSync.question('Your answer: ');
            if (answerNum === String(num1 + num2)) {
                console.log('Correct!');
            }
            else if (answerNum !== String(num1 + num2)) {
                console.log(`'${answerNum}' is wrong answer ;(. Correct answer was '${num1 + num2}'.`);
                return "Let's try again, name!";
            }
        }
        else if (symb === '-') {
            const answerNum = readlineSync.question('Your answer: ');
            if (answerNum === String(num1 - num2)) {
                console.log('Correct!');
            }
            else if (answerNum !== String(num1 - num2)) {
                console.log(`'${answerNum}' is wrong answer ;(. Correct answer was '${num1 - num2}'.`);
                return "Let's try again, name!";
            }
        }
        else if (symb === '*') {
            const answerNum = readlineSync.question('Your answer: ');
            if (answerNum === String(num1 * num2)) {
                console.log('Correct!');
            }
            else if (answerNum !== String(num1 * num2)) {
                console.log(`'${answerNum}' is wrong answer ;(. Correct answer was '${num1 * num2}'.`);
                return "Let's try again, name!";
            }
        }
        i += 1;
    }
    return 'Congratulations, name!';
};

export default calcgame;