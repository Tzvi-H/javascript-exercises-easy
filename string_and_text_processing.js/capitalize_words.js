/*
problem
  - Given a string, return a new string where each word is capitalized
example
  - 'four score and seven'    => "Four Score And Seven"
  - 'this is a "quoted" word' => 'This Is A "quoted" Word'
data structure
  - an array
algorithm
  - split the string into an array of words
  - map the array, for each word, do the following
    - transform the word into a new word where the first letter is uppercase and the rest are lowercase
  - join the array into a string with spaces in between the words
*/

function wordCap(string) {
  return string
         .split(' ')
         .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
         .join(' ');
}

console.log(wordCap('four score and seven'));      // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'