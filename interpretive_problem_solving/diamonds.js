/*
Problem
  - given a number n, display a four pointed diamond in an n by n grid.
  - n will be an odd integer
Algorithm
  - set stars to 1
  - set spaces to Math.floor(n / 2)
  - loop from 1 to Math.floor(n / 2), for every iteration (line)
    - print a space times spaces and a star times stars (same line)
    - increment stars by 2
    - decrement spaces by 1
  - loop from 1 to Math.ceil(n / 2), for every iteration (line)
    - print a space times spaces and a star times stars (same line)
    - decrement stars by 2
    - increment spaces by 1
*/

function diamond(count) {
  let stars = 1;
  let spaces = Math.floor(count/ 2);
  for (let line = 1; line <= Math.floor(count / 2); line += 1) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    stars += 2;
    spaces -= 1;
  }
  for (let line = 1; line <= Math.ceil(count / 2); line += 1) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    stars -= 2;
    spaces += 1;
  }
}

diamond(1);

diamond(3);

diamond(9);