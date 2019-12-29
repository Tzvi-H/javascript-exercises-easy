/*
Problem
  - Given a string, replace every instance of a number word with a digit
Examples
  - input  = 'Please call me at five five five one two three four. Thanks.'
  - output = 'Please call me at 5 5 5 1 2 3 4. Thanks.'
Data Strucure
Algorithm
  - Create an array with numberWords ['zero', 'one', ...] all the way to 'nine'
  - loop over the array, for every numberWord
    - create a RegExp object with the numberWord and the global flag.
    - replace every instance of the regex pattern with the current index string
*/

function wordToDigit(string) {
  let numberWords = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
  ];

  numberWords.forEach((numberWord, index) => {
    let pattern = new RegExp(`\\b${numberWord}\\b`, 'gi');
    string = string.replace(pattern, index);
  });

  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));