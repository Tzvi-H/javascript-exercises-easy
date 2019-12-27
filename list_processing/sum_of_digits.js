/*
problem
  - Given an integer, return the sum of its digits using list processing techniques
example
  - input  => 23
  - output => 5
data structure  
  - string
  - array
algorithm
  - convert integer to string
  - convert string to an array of characters
  - reduce the array by adding (an accumulator (starting at 0)) with (each char converted to a number)
*/

function sum(number) {
  return number
         .toString()
         .split('')
         .reduce((total, strNum) => total + Number(strNum), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45