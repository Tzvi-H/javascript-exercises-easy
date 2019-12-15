// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

const READLINE = require('readline-sync');

let number = READLINE.question('Please enter an integer greater than 0: ');
let operation = READLINE.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (operation === 's') {
  let sum = 0;
  for (let i = 1; i <= parseInt(number, 10); i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === 'p') {
  let product = 1;
  for (let i = 1; i <= parseInt(number, 10); i += 1) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${number} is ${product}.`);
}