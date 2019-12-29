/*
Problem
  - Given a number, rotate the number from the first digit, then the second,
    then the third, etc, all the way to 2nd from the last (inclusive)
Examples
  - 735291 => 321579
  - 3 => 3
  - 105 => 15 (the leading zeros get dropped)
Data Structure
Algorithm
  - create a length variable set to the length of the number
    (conver the number to a string and get is length)
  - loop from the length while its greater than 1, at each iteration
    - reassign the number to the result of calling rotateRightmostDigits
      with -(length) as the 2nd argument
    - decrement the length by 1
*/

function maxRotation(number) {
  let result = number;
  let numberLength = number.toString().length;
  for (let count = numberLength; count > 1; count -= 1) {
    result = rotateRightmostDigits(result, count);
  }
  return result;
}

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

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845