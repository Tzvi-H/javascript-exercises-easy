/*
problem
  - given 2 arrays of numbers, return an array of all the possible products 
    between a number from array1 and number from array2, 
    the final array should be sorted in numerical ascending order
example
  input - [2, 4], [4, 3, 1, 2]
  output - [2, 4, 4, 6, 8, 8, 12, 16]
data structure
  - a new array to store all the products
algorithm
  - reduce the first array,
    - start with an empty array accumulator
    - for each number in array1
    - add into the accumulator a mapped array2
    where each element is the product of itself with the current array1 number
    - return the the accumulator for the next iteration
  - sort the reduced arry in ascending numberical order
*/

function multiplyAllPairs(arr1, arr2) {
  return arr1
         .reduce((products, num1) => {
           return products.concat(arr2.map(num2 => {
             return num2 * num1;
           }));
         },[])
         .sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
