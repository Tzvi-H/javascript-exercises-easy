/*
problem
  - Given a string, return a list of all the substrings (starting from the first character)
example
  - input  = 'abcde'
  - output = [ "a", "ab", "abc", "abcd", "abcde",
              "b", "bc", "bcd", "bcde",
              "c", "cd", "cde",
              "d", "de",
              "e"]
data structure
  - an array
algorithm
  - create an empty array
  - loop over the indeces of the input string, at each iteration
    - get a slice of the string starting from idx 0 until the current itertion number + 1
    - get the leadingSubstrings (using a previous solution) of the current substring
    - append the leadingSubstrings into the empty array
*/ 

function substringsAtStart(string) {
  return string
         .split('')
         .map((_, index) => string.slice(0, index + 1));
}

function substrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    result.push(...substringsAtStart(string.slice(idx)));
  }
  return result;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]