/*
Problem
  - Given 3 numbers, return the type of triangle those numbers represent
    (invalid, equilateral, isosceles, scalene)

    invalid - One of the numbers is not greater than 0
            OR
            - The sum of the 2 smaller numbers is not greater than the largest
    equilateral - all numbers are equal
    isosceles - only 2 numbers are equal
    scalene - all 3 numbers aren't equal
Examples
  - 3, 3, 3   => equilateral
  - 3, 3, 1.5 => isosceles
  - 3, 4, 5   => scalene
  - 0, 3, 3   => invalid
  - 3, 1, 1   => invalid
Algorithm
  - if the numbers represent an invalid (SUBPROCESS) return 'invalid'
  - if the numbers are all the same return 'equilateral'
  - if the 1st is the same as the 2nd
    OR if the 1st is the same as the 3rd
    OR if the 2nd is the same as the 3rd return 'isosceles'
  - otherwise return 'scalene'

  SUBPROCESS invalid
  - Given 3 numbers
  - sort the numbers in ascending order
  - return true if the smallest number is greater than 0
    AND the sum of the 2 smaller numbers is greater than the largest number
*/

function triangle(side1, side2, side3) {
  if (!valid(side1, side2, side3)) {
    return 'invalid';
  } else if (side1 === side2 && side1 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function valid(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);
  return (sides[0] > 0 && sides[0] + sides[1] > sides[2]);
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"