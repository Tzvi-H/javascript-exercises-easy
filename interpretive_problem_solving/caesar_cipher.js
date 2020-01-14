/*
problem
  - Given a string and a key, return a new string where all alphabetical
    characters are shifted over to the right (key amount of times).
  - leave non-alphabetic characters as is
  - uppercase characters remain uppercase, and same for lowercase characters
  - if the key value causes the character to go past 'z', then start over from 'a'
examples
  - (ABCDEFGHIJKLMNOPQRSTUVWXYZ, 25) => ZABCDEFGHIJKLMNOPQRSTUVWXY
  - ('There are, as you can see, many punctuations. Right?; Wrong?', 2) =>
    "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
algorithm
  - given a string and a key
  - create a result variable set to an empty string
  - loop over the string, for each char
    - if the char is an uppercase alphabetical character (regex)
      - append to result the char shifted over (SUBPROCESS)
    - else if the char is a lowercaser alphabetical character (regex)
      - append to result the char shifted over (SUBPROCESS)
    - else (not an alphabetical character)
      - append the char to result
  - return the result

  SUBPROCESS shiftOver
  - get the charCode for the character
  - add the key
  - call mod on 26 and the value
  - add the value to either 65 or 97
  - return the char for that char code
*/

function caesarEncrypt(string, key) {
  let encryptedString = '';

  for (let char of string) {
    if (/[a-zA-Z]/.test(char)) {
     encryptedString += shiftOver(char, key);
    } else {
      encryptedString += char;
    }
  }

  return encryptedString;
}

function shiftOver(char, key) {
  let start = /[a-z]/.test(char) ? 97 : 65;
  let charCode = char.charCodeAt() + key;
  charCode -= start;
  charCode = start + (charCode % 26);
  return String.fromCharCode(charCode);
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
