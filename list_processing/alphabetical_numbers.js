/*
problem
  - Given an array of the numbers 1-19 (inclusive), return the array sorted alphabetical by the
  number's corresponding english word
  (zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
  thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen)
example
  - input  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  - output [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
data structure
  - array of english words
algorithm
  - create an array that will contain all the word representations of the numbers 1-19 (inclusive)
  - create a copy of the array
  - sort the copied array by the corresponding word of each number
    - compare the corresponding words of each pair of numbers
    - if wordA < wordB
      - return -1
    - if wordA > wordB
      - return 1 
    - else
      - return 0  
*/

function alphabeticNumberSort(numbers) {
  const numberWords = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  return numbers
         .slice()
         .sort((a, b) => {
           if (numberWords[a] < numberWords[b]) {
             return -1;
           } else if (numberWords[a] > numberWords[b]) {
             return 1;
           } else {
             return 0;
           }
        });
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]