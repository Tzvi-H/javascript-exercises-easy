// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

// Examples:

// swapName('Joe Roberts');    // "Roberts, Joe"

function swapName(name) {
  let names = name.split(' ');
  let surname = names[names.length - 1];
  let forenames = names.slice(0, -1);

  return `${surname}, ${forenames.join(' ')}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"
