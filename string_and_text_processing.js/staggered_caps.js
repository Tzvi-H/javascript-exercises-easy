/*
problem
  - given string,
  - return a new string,
  - where every other character is uppercased
  - all other characters are lowercased
  - (non-alphabetic letters should be left unchanged but should
    be inlcuded in the count of every other character)
- examples
  input -  I Love Launch School!
  output - I LoVe lAuNcH ScHoOl!
  input -  ALL_CAPS
  output - AlL_CaPs
- data structure
- algorithm
  - create an empty string variable (result)
  - split input string into an array of chars
  - loop over the array, for each char and index
    - if char is alphabetic
      - if index is even
        - reassign char to char uppercased
      - else (index is odd)
        - reassign char to char lowercased
    append char to the result string
  - return the result string
*/

function staggeredCase(string) {
  return string
         .split('')
         .map((char, idx) => {
           if (/[a-z]/i.test(char)) {
             if (idx % 2 === 0) {
               return char.toUpperCase();
             } else {
               return char.toLowerCase();
             }
           } else {
             return char;
           }
         })
         .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"