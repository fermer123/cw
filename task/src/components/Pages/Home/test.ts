const heavyFunction = (): number => {
  console.time('heavyFunction');
  let sum = 0;
  for (let i = 0; i < 10000000000; i += 1) {
    sum += i;
  }
  console.timeEnd('heavyFunction');
  return sum;
};

self.onmessage = () => {
  const result = heavyFunction();
  postMessage(result);
};
