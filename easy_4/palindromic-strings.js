// Palindromic Strings (Part 1)
// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// Examples:

// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

function isPalindrome(string) {
  let middleIndex = Math.floor(string.length / 2);
  let frontIndex = 0;
  let backIndex = string.length - 1;

  while (frontIndex < middleIndex) {
    if (string[frontIndex] !== string[backIndex]) {
      return false;
    }
    frontIndex += 1;
    backIndex -= 1;
  }

  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
