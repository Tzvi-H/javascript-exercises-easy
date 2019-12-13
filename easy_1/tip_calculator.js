/*
**problem**
retrieve a bill amount and tip rate from the user.
compute and log the tip and total bill. 

**input**
retrieve from user
  - bill amount
  - tip rate

**output**
tip and total

**algorithm**
1. retrieve total bill from user
2. retrieve tip rate from user
3. convert tip rate to percentage (divide by 100)
4. calculate tip by multiplying bil by tip percentage
5. calculate total bill by adding tip to bill
*/

const READLINE = require('readline-sync');

console.log('What is the bill?');
let bill = parseFloat(READLINE.prompt());

console.log('What is the tip percentage?');
let tipRate = parseFloat(READLINE.prompt());
let tipPercentage = tipRate / 100;

let tip = (bill * tipPercentage);
let totalBill = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`);


