const getRandom = (max = 100, min = 1) => {
  const randomnum = Math.floor(Math.random() * (max - min)) + 1;
  return randomnum;
};

export default getRandom;
