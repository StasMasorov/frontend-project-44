import readlineSync from 'readline-sync';

export const welcome = () => {
    const name = readlineSync.question('May I have your name? ');
    return 'Hello, ' + name + '!';
};
