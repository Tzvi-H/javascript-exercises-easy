// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const READLINE = require('readline-sync');

let currentAge = Number(READLINE.question('What is your age? '));
let retirementAge = Number(READLINE.question('At what age would you like to retire? '));
let workingYearsLeft = retirementAge - currentAge;

let currentYear = new Date().getFullYear();
let retirementYear = currentYear + workingYearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${workingYearsLeft} years of work to go!`);