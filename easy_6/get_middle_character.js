// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Examples:

// centerOf('I Love Ruby');      // "e"
// centerOf('Launch School');    // " "
// centerOf('Launch');           // "un"
// centerOf('Launchschool');     // "hs"
// centerOf('x');                // "x"

function centerOf(string) {
  let middleIndex = Math.floor(string.length / 2);
  let result = string.length % 2 === 0 ?
               string.slice(middleIndex - 1, middleIndex + 1) :
               string[middleIndex];
  return result;
}

console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"