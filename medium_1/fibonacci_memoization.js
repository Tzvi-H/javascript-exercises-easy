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

memo = {};
function fibonacci(nth) {
  if (nth <= 2) return 1;
  if (memo[nth]) return memo[nth];

  memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  return memo[nth];
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