/*
problem
  - given an array, where each element is inner array containing a value and a count,
    return a new array containing all the values appearing the number of times as their corresponding count 
example
  - input  = [['apple', 3], ['orange', 1], ['banana', 2]]
  - output = ["apple", "apple", "apple", "orange", "banana", "banana"]
data structure
algorithm
  - reduce the input array with an empty array accumulator, for each inner array
    - create a new array of innerArray[1] length
    - fill the array with innerArray[0] values
    - return the accumulator concatenated with the new array
*/

function buyFruit(array) {
  return array.reduce((list, subArr) => {
    return list.concat(Array(subArr[1]).fill(subArr[0]));
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
