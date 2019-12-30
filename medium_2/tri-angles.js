/*
Problem
  - Given 3 numbers(angles), return the type of triangle those numbers represent
    (invalid, right, obtuse, acute)

    Valid - Every number is greater than 0
            AND
            - The sum of the all the numbers is equal to 180
    right - one of the numbers is 90
    obtuse - one number is greater than 90
    acute - all 3 are less than 90
Examples
  - 60, 70, 50  => "acute"
  - 30, 90, 60  => "right"
  - 120, 50, 10 => "obtuse"
  - 0, 90, 90   => "invalid"
  - 50, 50, 50  => "invalid"
Algorithm
  - if triangle is invalid (SUBPROCESS) => return 'invalid'
  - get the largest number
  - if it's 90   => return 'right'
  - if it's < 90 => return 'acute'
  - if it's > 90 => return 'obtuse'

  SUBPROCESS invalid
  - Given 3 valid
  - return true if none of the numbers are equal to 0
    And the sum of the numbers is 180
*/

function triangle(angle1, angle2, angle3) {
  if (!validTriangle(angle1, angle2, angle3)) return 'invalid';
  let largestAngle = Math.max(angle1, Math.max(angle2, angle3));

  if (largestAngle === 90) {
    return 'right';
  } else if (largestAngle > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

function validTriangle(angle1, angle2, angle3) {
  return (Math.min(angle1, (Math.min(angle2, angle3)) !== 0) &&
          angle1 + angle2 + angle3 === 180
         );
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
