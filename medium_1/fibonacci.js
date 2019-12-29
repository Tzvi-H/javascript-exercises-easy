/*
Problem
  - given a number n, calculate the n'th fibonacci number.
Examples
  - 1 => 1
  - 2 => 1
  - 3 => 2
Algorithm
  - if n is less than 3, return 1
  - otherwise, return fibonacci(n-1) + fibonacci(n-2)
*/

function fibonacci(nth) {
  if (nth < 3) return 1;

  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
