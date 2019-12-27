/*
problem
  - given a string, return a list of all the substrings which are palindromes (case-sensitive, and include all chars)
example
  - input  = madam
  - output = [ "madam", "ada" ]
data structure
  - an array
algorithm
  - get all the substrings (using previously build functions)
  - filter the substrings, for each word
    - split the word into an array
    - reverse the array
    - join the array back into a string
    - return whether the reversed string is the same as the original word
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

function palindromes(string) {
  return substrings(string)
         .filter(word => {
           return word.length > 1 &&
                  word === word.split('').reverse().join('');
         })
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]