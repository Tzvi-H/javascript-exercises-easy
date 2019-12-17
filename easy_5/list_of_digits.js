// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

// Examples:

// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

function digitList(number) {
  let results = [];
  while (number > 0) {
    results.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  return results;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]