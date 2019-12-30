/*
Problem
  - Given a number n, return the difference between
    the square of the sum of all the numbers from 1 to n
    And
    the sum of the squares of all the number from 1 to n
Examples
  - 3 => 22 (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
Algorithm
  - given an input number n
  - set a sum variable set to 0
  - a sumOfSquares variable set to 0
  - loop from 1 to n (inclusive), for every current iteration j
    - add j to the sum
    - add j squared to the sumOfSquares
  - set sumSquared to sum squared
  - return sumSquared - sumOfSquares
*/

function sumSquareDifference(number) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let current = 1; current <= number; current += 1) {
    sum += current;
    sumOfSquares += (current ** 2);
  }

  return (sum ** 2) - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150