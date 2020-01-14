function vigenerCipher(text, keyword) {
  let result = '';
  let tracker = trackVigenereValues(keyword);

  for (let char of text) {
    if (!/[a-zA-Z]/.test(char)) {
      result += char;
    } else {
      let charCode = char.charCodeAt() + tracker();
      let start = /[a-z]/.test(char) ? 97 : 65;
      if ((charCode - start) >= 26) {
        charCode -= 26;
      }
      charCode = charCode - start;
      //console.log(char, start + charCode)
      result += String.fromCharCode(start + charCode);
    }
  }

  return result;
}

function trackVigenereValues(keyword) {
  let count = 0;
  return function() {
    if (count === keyword.length) count = 0;
    let char = keyword[count].toLowerCase();
    count += 1;
    return char.charCodeAt() - 97;
  }
}


console.log(vigenerCipher("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");