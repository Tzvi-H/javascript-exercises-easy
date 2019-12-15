// Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

// Examples:

// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');                   // 0

function asciiValue(string) {
  let asciiValueSum = 0;
  let index = 0;
  while (index < string.length) {
    let currentChar = string[index];
    asciiValueSum += currentChar.charCodeAt();
    index += 1;
  }
  return asciiValueSum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0