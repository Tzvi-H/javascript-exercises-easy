/*
problem
  - Given an array of 1+ strings, return a new array where the strings have their vowels removed (not bowels)
example
  - ['abcdefghijklmnopqrstuvwxyz'] => ["bcdfghjklmnpqrstvwxyz"]
  - ['ABC', 'AEIOU', 'XYZ']        => ["BC", "", "XYZ"]
data structure
algorithm
  - map the input array, for each string do the following
    - replace any instance of a vowel with an empty character 
      (using the replace method and the regex /[aeiou]/gi)
*/

function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
