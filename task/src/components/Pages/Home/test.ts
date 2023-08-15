const heavyFunction = (): number => {
  console.time('heavyFunction');
  let sum = 0;
  for (let i = 0; i < 1000000000; i += 1) {
    sum += i;
  }
  console.timeEnd('heavyFunction');
  // Вернуть результат вычислений
  return sum;
};

export default heavyFunction;
