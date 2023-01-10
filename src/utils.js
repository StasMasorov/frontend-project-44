export const getRandom = (min = 1, max = 100) => {
  const result = Math.floor(Math.random() * (max - min + 1));
  return result;
};

export const calculate = (num1, num2, symb) => {
  let calcAnswer = '';
  if (symb === '+') {
    calcAnswer += String(num1 + num2);
  } else if (symb === '-') {
    calcAnswer += String(num1 - num2);
  } else if (symb === '*') {
    calcAnswer += String(num1 * num2);
  }
  return calcAnswer;
};
