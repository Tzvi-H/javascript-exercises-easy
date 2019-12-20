// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

// Examples:

// sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35

/*
problem
  - given an array of numbers
  - return the sum of the sums of each leading subsequence
  - example. [3,5,2] => (3) + (3 + 5) + (3 + 5 + 2)
data structure
algorithm
  - set accumulator to 0
  - set result to 0
  - for every number in the array
    - add number to accum
    - add accum to result
  - return the result
*/

function sumOfSums(numbers) {
  let result = 0;
  let accumulator = 0;
  numbers.forEach(num => {
    accumulator += num;
    result += accumulator;
  });
  return result;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35