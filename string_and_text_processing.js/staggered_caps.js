/*
problem
  - given a string, return a new string where the characters at even indeces 
   (starting from 0) are uppercase, and the ones at odd indeces are lowercase
example
  - 'I Love Launch School!' => "I LoVe lAuNcH ScHoOl!"
data structure
  - an array
algorithm
  - split the string into an array of characters
  - map the array, for each char and index, do the following
    - if index is even => return the char uppercase
    - if index is odd => return the char downcasse
  - join the array into a string with no spaces in between the letters
*/

function staggeredCase(string) {
  return string
         .split('')
         .map((chr, idx) => {
           return idx % 2 === 0 ? chr.toUpperCase() : chr.toLowerCase();
         })
         .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
