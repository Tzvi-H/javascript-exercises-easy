/*
problem
  - given a string of words, return an array where each element is a word from the string concatenated
    with the word's length
  example
  - 'cow sheep chicken' =>  ["cow 3", "sheep 5", "chicken 7"]
data structure
  - an array
algorithm
  - split the string into an array of words
  - map the array, for each word, do the following
    - return a string containing the word with its length
  - join the array back into a string words
*/

function wordLengths(string) {
  if (arguments.length === 0 || string.length === 0) return [];

  return string
         .split(' ')
         .map(word => `${word} ${word.length}`)
         .join(' '); 
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
