const getRandom = (max, min) => {
  const randomnum = Math.round(Math.random() * (max - min)) + 1;
  return randomnum;
};

export default getRandom;
