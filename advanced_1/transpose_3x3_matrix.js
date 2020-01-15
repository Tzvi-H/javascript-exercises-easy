/*
Problem
  - given a 3x3 array, (an array with 3 inner arrays, each inner array contains 3 elements)
    return a new array where the rows are now columns and the columns are now rows.
  - don't modify the input array
Algorithm
  - given a matrix
  - create a newMatrix array
  - loop from 0 until the matrix length (exclusive), for each iteration index
    - create an tempArray
    - loop from 0 until the the matrix length (exclusive), for each iteration inner
      - get the element at matrix[inner][index]
      - append the element to tempArray
    - append tempArray to newMatrix
  - return newMatrix    
*/

function transpose(matrix) {
  let transposedMatrix = [];

  for (let index = 0; index < matrix.length; index += 1) {
    let temp = [];
    for (let inner = 0; inner < matrix.length; inner += 1) {
      temp.push(matrix[inner][index]);
    }
    transposedMatrix.push(temp);
  }

  return transposedMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

function transpose2(matrix) {
  [matrix[0][1], matrix[1][0]] = [matrix[1][0], matrix[0][1]];
  [matrix[0][2], matrix[2][0]] = [matrix[2][0], matrix[0][2]];
  [matrix[1][2], matrix[2][1]] = [matrix[2][1], matrix[1][2]];
  return matrix;
}

let newMatrix2 = transpose2(matrix);

console.log(newMatrix2);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]