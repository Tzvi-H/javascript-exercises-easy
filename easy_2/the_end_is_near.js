// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

// Examples:

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs 

function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function middleWord(string) {
  if (typeof string != 'string') return 'Invalid. Not a string';

  let words = string.split(' ');

  if (words.length < 2) return string;

  let middleIndex = Math.floor(words.length / 2);
  return words[middleIndex];
}

console.log(middleWord(''));
console.log(middleWord('Hello'));
console.log(middleWord('Hello world'));
console.log(middleWord('Hello global world'));
console.log(middleWord(1234));

