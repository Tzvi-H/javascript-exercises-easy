/*
Problem
  - given  2 sorted arrays,
    return a new single array with all the elements sorted
  - build the array one element at a time
Algorithm
  - given 2 sorted arrays
  - create a result empty array
  - set idx1 and idx2 to 0
  - while (idx1 is less than array1 length) OR (id21 is less than array2 length)
    - value1 = array1[idx1] or -Infinity
    - value2 = array2[idx2] or -Infinity
    - if value1 < value2
      - push value1 into the result array
      - increment idx1 by 1
    - otherwise (value1 >= value2)
      - push value2 into the result array
      - increment idx2 by 1
  - return the result array
*/

function merge(array1, array2) {
  let mergedArray = [];

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < array1.length || idx2 < array2.length) {
    let value1 = array1[idx1] || Infinity;
    let value2 = array2[idx2] || Infinity;

    if (value1 < value2) {
      mergedArray.push(value1);
      idx1 += 1;
    } else {
      mergedArray.push(value2);
      idx2 += 1;
    }
  }

  return mergedArray;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
