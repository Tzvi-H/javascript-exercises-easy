/*
PROBLEM
  - Given a year greater than 1752, return the amount of times that
    there is a friday that falls on the 13th of the month
Examples
  - 1986 => 1
  - 2015 => 3
  - 2017 => 2
Algorithm
  - create a result variable set to 0
  - create a thirteenth variable to jan 13 of the input year
  - loop 12 times, at each iteration
    - if thirteenth is a friday (SUBPROCESS), increment result by 1
    - add 1 month to the thirteenth variable
*/

function fridayThe13ths(year) {
  let result = 0;

  for (let month = 0; month <= 11; month += 1) {
    let date = new Date(year, month, 13);
    if (isFriday(date)) result += 1;
  }

  return result;
}

function isFriday(date) {
  return date.getDay() === 5;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2