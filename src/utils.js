const getRandom = (max = 100, min = 1) => {
  const randomnum = Math.round(Math.random() * (max - min)) + 1;
  return randomnum;
};

export default getRandom;
