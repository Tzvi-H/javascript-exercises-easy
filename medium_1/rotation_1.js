/*
Problem
  - Given an array, return a new array where the first element has been moved to the back.
  - If input is an empty array, return an empty array
  - If input is not an array, return undefined
Examples
  - [7, 3, 5, 2, 9, 1] => [3, 5, 2, 9, 1, 7]
  - 1 => undefined
Data Structure
  - a new array
Algorithm
  - If the input isn't an array
    - return undefined
  - If the input is an empty array
    - return an empty array
  - Create a new array which contains a slice of the input array,
    from index 1 until the end.
  - push the first element in the input array to the end of the new array
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  return array
         .slice(1)
         .concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]