/*
problem
  - given a string, return a new string where every other character is uppercased,
    if a character is not-alphabetical, include it in the string but it shouldn't
    count as to toggle the case
  example
  - 'ALL CAPS' => 'AlL cApS'
data structure
  - an array
algorithm
  - create a variable needsUpperCase set to true
  - split the string into an array of characters
  - map the array, for each char, do the following
    - if char is a alphabetical
      - if needsUpperCase is true 
        - set needsUpperCase to false
        - return the char uppercase
      - if needsUpperCase is false 
        - set needsUpperCase to true
        - return the char lowercase  
    - if char is not alphabetical
      - return the char    
  - join the array into a string with no spaces in between the letters
*/

function staggeredCase(string) {
  let needsUpperCase = true;
  let result = '';
  for (let chr of string) {
    if (/[a-z]/i.test(chr)) {
      chr = needsUpperCase ? chr.toUpperCase() : chr.toLowerCase();
      needsUpperCase = !needsUpperCase;
    }
    result += chr;
  }
  return result;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);