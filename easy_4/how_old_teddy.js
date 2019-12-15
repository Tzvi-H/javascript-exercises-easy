// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// Example Output:

// Teddy is 69 years old!

function randomBetween(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  return Math.floor((min + (Math.random() * (max - min + 1))));
}

let age = randomBetween(7, 8);

console.log(`Teddy is ${age} years old!`);