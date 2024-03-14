//Execution stack & timing execution

const countPrimeNumbers = () => {
  let i, j;
  let counter = 0;

  for (i = 2; i <= 100; i++) {
    let prime = true;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      counter = counter + 1;
    }
  }
  // console.log(counter);
  return counter;
};

let t1 = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
let t2 = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t2 - t1
  } milliseconds.`
);
