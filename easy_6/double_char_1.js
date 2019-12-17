// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// Examples:

// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

function repeater(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    result += (string[i] + string[i]);
  }
  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""