// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

// Example:

// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

function countOccurrences(array) {
  let occurences = {};

  array.forEach(function(val) {
    val = val.toLowerCase();
    occurences[val] = occurences[val] || 0;
    occurences[val] += 1;
  });

  for (let key in occurences) {
    console.log(`${key} => ${occurences[key]}`);
  }
}

let vehicles = ['Car', 'car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
console.log(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2