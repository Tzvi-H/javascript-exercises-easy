/*
Problem
  - given a number n, calculate the n'th fibonacci number
    using a procedural method.
Examples
  - 1 => 1
  - 2 => 1
  - 3 => 2
Algorithm
  - create an array (fibs) with the values [1, 1]
  - while the fibs length is less than the nth
    - get the sum of the last 2 elements of fibs
    - push the sum to the end of fibs
  - return the element at the nth index of fibs
*/

function fibonacci(nth) {
  let fibs = [1, 1];

  while (fibs.length < nth) {
    let newFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    fibs.push(newFib);
  }

  return fibs[nth - 1];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050