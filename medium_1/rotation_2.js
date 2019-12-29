/*
Problem
  - Given an number and a count, return a new number with the same digits,
  but where the last count digits have been rotated.
Examples
  - (735291, 1) => 735291
  - (735291, 2) => 735219
  - (735291, 3) => 735912
Data Structure
  - string
  - array
Algorithm
  - convert the number to a string
  - convert the string to an array of characters
  - create a new array that is a slice of the array of characters
    up to the -index count (exclusive)
  - push to the new array the result of calling rotate (previous exercise)
    on a slice of the input array starting from the -count index
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  return array
         .slice(1)
         .concat(array[0]);
}

function rotateRightmostDigits(number, count) {
  let digits = number.toString().split('');
  let leftDigits = digits.slice(0, -count);
  let rightDigits = digits.slice(-count);
  let result = leftDigits.concat(rotateArray(rightDigits));

  return Number(result.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917