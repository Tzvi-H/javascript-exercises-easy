/*
Problem
  - Given an odd integer size greater than or equal 7,
    print an 8 pointed start that is a n*n grid
Algorithm
  - given a size variable (size >= 7)
  - create a middle variable set to the size divided by 2 (rounded up)
  - loop from 1 until the size (inclusive), for every i
    - if i is equal to the middle varialbe
      - print '*' repeated size times
    - otherwise
      - create an empty string
      - loop from 1 until size (inclusive), for every j
        - if j === i OR
          if j === middleIndex OR
          if j === n - i + 1
          - append a star to the string
        - otherwise
          - append an empty space
        - print the string
*/


function star(size) {
  let middle = Math.ceil(size / 2);

  for (let row = 1; row <= size; row += 1) {
    if (row === middle) {
      console.log('*'.repeat(size));
      continue;
    }

    let string = '';
    for (let rowIndex = 1; rowIndex <= size; rowIndex += 1) {
      if ([row, middle, size - row + 1].includes(rowIndex)) {
        string += '*';
      } else {
        string += ' ';
      }
    }
    console.log(string);
  }
}

star(7);