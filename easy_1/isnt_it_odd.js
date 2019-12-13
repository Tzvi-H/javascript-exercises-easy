/*
**Problem**
Write a function, that when given an integer, returns a boolean
indicating whether the integer's absolute value is odd.

You can assume the integer is a valid.

**input**
A valid integer

**return**
boolean

**algorithm**
1. if the input is less than zero
    reassign it to a positive number
2. return whether the integer mod 2 is 1
*/

function isOdd(integer) {
  if (integer < 0) {
    integer *= -1;
  }

  return integer % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
