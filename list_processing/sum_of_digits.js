// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

// Examples:

// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

function sum(number) {
  return number.toString()
               .split('')
               .reduce((acc, num) => acc + Number(num), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45