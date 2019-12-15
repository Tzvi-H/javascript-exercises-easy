// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// Example:

// cleanUp("---what's my +*& line?");    // " what s my line "

function isChar(char) {
  return (char >= 'a' && char <= 'z') ||
         (char >= 'A' && char <= 'Z');
}

function cleanUp(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (isChar(char)) {
      result += char;
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }

  return result;
}

function cleanUp2(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "