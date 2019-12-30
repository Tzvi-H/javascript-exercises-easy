/*
Problem
  - Sort in array with bubble sort (mutate)
  - Assume that the array contains at least 2 elements
Algorithm
  - set swapWadDone to false
  - create a do/while loop, for each iteration
    - loop from the first element until the last (exclusive), at every iteration
      - if the current element is larger than the next
        - swap the 2 elements
        - set swapWadDone to true
    - do this as long (while) madeSwap is true
*/

function bubbleSort(array) {
  let swapWadDone;
  do {
    swapWadDone = false;
    for (let index = 0; index < array.length - 1; index += 1) {
      let [left, right] = [array[index], array[index + 1]];
      if (left > right) {
        [array[index], array[index + 1]] = [right, left];
        swapWadDone = true;
      }
    }
  } while (swapWadDone);
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]