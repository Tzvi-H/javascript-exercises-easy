// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// Examples:

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

function oddities_1(array) {
  let result = [];

  let index = 0;
  while (index < array.length) {
    result.push(array[index]);
    index += 2;
  }

  return result;
}

function oddities_2(array) {
  let results = [];

  array.forEach(function(value, index) {
    if (index % 2 === 0) results.push(value);
  });

  return results;
}

function oddities_2(array) {
  let results = [];

  for (let i = 0; i < array.length; i += 2) {
    results.push(array[i]);
  }

  return results;
}

function n_ities(array, n) {
  if (n <= 0) return 'invalid count'

  let results = [];

  for (let i = 0; i < array.length; i += n) {
    results.push(array[i]);
  }

  return results;
}

console.log(n_ities([0,1,2,3,4,5,6,7,8,9,10], 0));
console.log(n_ities([0,1,2,3,4,5,6,7,8,9,10], 1));
console.log(n_ities([0,1,2,3,4,5,6,7,8,9,10], 2));
console.log(n_ities([0,1,2,3,4,5,6,7,8,9,10], 3));
console.log(n_ities([0,1,2,3,4,5,6,7,8,9,10], 4));
console.log(n_ities([0,1,2,3,4,5,6,7,8,9,10], 5));
console.log(n_ities([0,1,2,3,4,5,6,7,8,9,10], 6));
console.log(n_ities([0,1,2,3,4,5,6,7,8,9,10], 7));