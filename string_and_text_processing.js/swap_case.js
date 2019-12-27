/*
problem
  - given a string, return a string where all the cases are swapped 
    (uppercase becomes lowercase and lowercase becomes uppercase),
example
  - 'Tonight on XYZ-TV' => "tONIGHT ON xyz-tv"
data structure
  - an array
algorithm
  - split the string into an array of characters
  - map the array, for each char, do the following
    - if char is uppercase => return the char lowercase
    - if char is uppercase => return the char uppercase
  - join the array into a string with no spaces in between the letters
*/

function swapCase(string) {
  return string
         .split('')
         .map(chr => /[A-Z]/.test(chr) ? chr.toLowerCase() : chr.toUpperCase())
         .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
