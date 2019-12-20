// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

// Example:

// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

/* 
problem
  - Given a nested array, 
  - where each subarray contains a fruit and a qty
  - return a one-dimensional array
  - where each fruit is found the amount of times as it's qty
example
  input => [['apple', 3], ['orange', 1], ['banana', 2]]
  output => ["apple", "apple", "apple", "orange", "banana", "banana"]
data structure
  - a one-dimensional array to populated by the fruits
algorithm
  - set a fruits variable to an empty array
  - loop over the input array, for each innerarray
  - set fruit to innerarray[0]
  - set count to innerarray[1]
  - loop from 1 to count (inclusive)
  - add the fruit to the fruits array
  - return fruits
*/

function buyFruit(groceryList) {
  let fruits = [];
  groceryList.forEach(fruitQty => {
    for (let count = 1; count <= fruitQty[1]; count += 1) {
      fruits.push(fruitQty[0]);
    }
  });
  return fruits;
}

function buyFruit(list) {
  const mergedResult = list.map(subarray =>
    Array(subarray[1]).fill(subarray[0])
  );
  console.log(mergedResult);
  return [].concat(...mergedResult);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
