export const calculateSum = () => {
  let index = 13,
    sum = 0,
    k = 0;

  while (k < index) {
    k += 1;
    sum += k;
  }

  console.log(`The result is: ${sum}`);
};
