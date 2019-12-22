/*
problem
  - given a string,
  - return a new string with all the character cases swapped
example
  input - 'CamelCase'
  output - 'cAMELcASE'

  input - 'Tonight on XYZ-TV'
  output - 'tONIGHT ON xyz-tv'
data structure
algorithm
  - split string into array of characters
  - map the array, for each character
    - if char === uppercase char
      - return char lowercase
    - else (char === uppercase char)
      - return char uppercase
  - join array into string with nothing in between
*/

function swapCase(string) {
  let chars = string.split('');
  let charsSwapped = chars.map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  });
  return charsSwapped.join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"