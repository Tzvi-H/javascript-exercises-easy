/*
problem
  - Given a string, return an array of all substrings starting from the first character
example
  - input  = 'abc'
  - output = ["a", "ab", "abc"]
data structure
  - an array
algorithm
  - split the string into an array of characters
  - map the array, 
    - for each element's index
    - return a new string from the input string index 0 until the current index
*/

function substringsAtStart(string) {
  return string
         .split('')
         .map((_, index) => string.slice(0, index + 1));
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]