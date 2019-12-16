// Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                   

function wordSizes(string) {
  let sizes = {};
  if (string === '') return sizes;

  let words = string.split(' ');

  words.forEach(function(word) {
    let length = word.length;
    if (sizes.hasOwnProperty(length)) {
      sizes[length] += 1;
    } else {
      sizes[length] = 1;
    }
  });

  return sizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}