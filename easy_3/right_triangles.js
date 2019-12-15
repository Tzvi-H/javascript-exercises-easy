// Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

// Examples:

// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

function triangle(height) {
  for (let line = 1; line <= height; line += 1) {
    let spaces = ' '.repeat(height - line);
    let stars = '*'.repeat(line);
    console.log(`${spaces}${stars}`);
  }
}

triangle(5);
triangle(9);