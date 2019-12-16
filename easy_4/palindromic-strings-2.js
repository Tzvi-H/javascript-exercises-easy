// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false

function isRealPalindrome1(string) {
  string = string.toLowerCase().replace(/[^0-9a-z]/g, '');
  return isPalindrome(string);
}

function isRealPalindrome2(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string.toLowerCase()[idx];
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      result += char;
    }
  }

  return isPalindrome(result);
}

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

console.log(isRealPalindrome2('madam'));               // true
console.log(isRealPalindrome2('Madam'));               // true (case does not matter)
console.log(isRealPalindrome2("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome2('356653'));              // true
console.log(isRealPalindrome2('356a653'));             // true
console.log(isRealPalindrome2('123ab321'));            // false