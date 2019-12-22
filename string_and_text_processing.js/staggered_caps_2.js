/*
problem
  - given string,
  - return a new string,
  - where every other character is uppercased
  - all other characters are lowercased
  - (non-alphabetic letters should be left unchanged and should
    not be inlcuded in the count of every other character)
- examples
  input -  I Love Launch School!
  output - I lOvE lAuNcH sChOoL!
  input -  ALL_CAPS
  output - AlL cApS
- data structure
- algorithm
  - set needUpper to true
  - split input string into an array of chars
  - map the array, for each char
    - if char is alphabetic
      - if needUpper is true
        - reassign needUpper to false
        - return char uppercased
      - if needUpper is false
        - reassign needUpper to true
        - return char lowercased
    - if char in non-alphabetic
      - return char
  - join the array into string (with nothing in between the chars)
*/

// eslint-disable-next-line max-lines-per-function
function staggeredCase(string, countNonChars = false) {
  let needUpper = true;
  return string
         .split('')
         .map((char) => {
           if (/[a-z]/i.test(char)) {
             if (needUpper) {
               char = char.toUpperCase();
             } else {
               char = char.toLowerCase();
             }
             needUpper = !needUpper;
             return char;
           } else {
             if (countNonChars) needUpper = !needUpper;
             return char;
           }
         })
         .join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log(staggeredCase('I Love Launch School!', true) === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS', true) === "AlL_CaPs");
console.log(staggeredCase('ignore 77 the 444 numbers', true) === "IgNoRe 77 ThE 444 NuMbErS");