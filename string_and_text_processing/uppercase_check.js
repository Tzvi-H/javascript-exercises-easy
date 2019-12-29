/*
problem
  - Given a string, return false if there are any lowercase characters
example
  - 'Four Score' => false
  - 'FOUR SCORE' => true
  - ''           => true
data structure
algorithm
  - use the regex /[a-z]/ to determine if there are lowercase characters in the string
*/

function isUppercase(string) {
  return !(/[a-z]/.test(string));
}

console.log(isUppercase(''));                // true
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true