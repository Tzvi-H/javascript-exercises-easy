// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

// logInBox('To boldly go where no one has gone before.');
// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
// You may assume that the output will always fit in your browser window. 

function logInBox(text) {
  let outer = `+-${'-'.repeat(text.length)}-+`;
  let inner = `| ${' '.repeat(text.length)} |`;
  let middle = `| ${text} |`;

  console.log(outer);
  console.log(inner);
  console.log(middle);
  console.log(inner);
  console.log(outer);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
