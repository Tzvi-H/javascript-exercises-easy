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