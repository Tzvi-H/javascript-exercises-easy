/*
**problem**
ask the user for the length and width of a room in meters.
log the are in both square meters and square feet

note: 1 square meter == 10.7639 square feet

**input**
from user: 2 numbers. (length and width)

**output**
square meters and square feet

**algorithm**
1. ask user for length
2. convert to number and assign to variable
3. ask user for width
4. convert to number and assign to variable
5. set area meters  to length * width
6. set area feet to area meters * 10.7639
*/

const READLINE = require('readline-sync');
const METERS_TO_FEET = 10.7639;

console.log('Enter the length of the room in meters:');
let lengthInMeters = parseInt(READLINE.prompt(), 2);

console.log('Enter the width of the room in meters:');
let widthInMeters = parseInt(READLINE.prompt(), 2);

let areaInMeters = lengthInMeters * widthInMeters.toFixed(2);
let areaInFeet = areaInMeters * METERS_TO_FEET.toFixed(2);

console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`);