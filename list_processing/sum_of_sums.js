/*
problem
  - given a an array of numbers, return the sum each leading subsequnce
example
  - input  = [3, 5, 2]
  - output = 21 (3) + (3 + 5) + (3 + 5 + 2)
data structure
algorithm
  - create a sum variable set to 0
  - create an accumulator set to 0
  - loop over the array, for each number
    - add the number to the accumulator
    - add the accumulator to the sum
*/

function sumOfSums(numbers) {
  let sum = 0
  let accumulator = 0
  numbers.forEach(number => {
    accumulator += number;
    sum += accumulator;
  })
  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35