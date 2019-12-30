/*
Problem
  - Given a number return the next "Featured Number".
    If there isn't a next "Featured Number", return an error message.
  - What's a featured number?
  - is odd
  - multiple of 7
  - no digit occurs more than once
  - (The largest featured number is 9876543201)
Example
  - 12         => 21
  - 21         => 35
  - 9876543200 => 9876543201
  - 9876543201 => 'There is no possible number that fulfills those requirements.'
Algorthm
  - if the number is greater than or equal to 9876543201
    return an error message
  - Find the next number that is odd and divisible by 7 (SUBPROCESS)
  - set a loop, at each iteration
    - if the digits in the number all occur just once (SUBPROCESS)
      - return the number
    - otherwise
      - increment the number by 14

  SUBPROCESS nextOddMultipleOf7
  - given an input number
  - keep on incrementing number by 1
    - Until it is both odd and divisible by 7

  SUBPROCESS allUnique
  - given a number
  - create a seen variable as an empty object
  - coerce the number into a string
  - loop over the string, for every character
    - if there exists a char property in the object
      - return false
    - otherwise
      - add char property to the object set to true
  - return true
*/

function nextOddMultipleOf7(num) {
  do {
    num += 1;
  } while (num % 2 === 0 || num % 7 !== 0);
  return num;
}

function allUnique(number)  {
  let alreadySeen = {};
  for (let char of number.toString()) {
    if (alreadySeen[char]) return false;
    alreadySeen[char] = true;
  }
  return true;
}

function featured(number) {
  const MAX_FEATURED = 9876543201;
  for (let num = nextOddMultipleOf7(number); num <= MAX_FEATURED; num += 14) {
    if (allUnique(num)) return num;
  }
  return 'There is no possible number that fulfills those requirements.';
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."