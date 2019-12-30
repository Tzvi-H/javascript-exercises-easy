/*
Problem
  - Given a number x representing lights, return an array
    representing the lights that would still be on if you made x
    passes toggling the lights, on each pass, you toggle every nth light
    where n starts from 1 and goes to x
Examples
  - 5   => [1, 4]
  - 100 => [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
Algorithm
  - create an array of size x with its elements set to false
  - loop from 1 to x (inclusive), at each iteration y
    loop from y to x (inclusive), at each iteration z
      - toggle array[z - 1] to true/false
      - increment z by y
  - map the array, for each element and index
    - if false, return false
    - if true, return index + 1
  - filter the array
    - if not false, return true
*/

function lightsOn(switches) {
  let lights = Array(switches).fill(false);

  for (let pass = 1; pass <= switches; pass += 1) {
    for (let light = pass - 1; light < switches; light += pass) {
      lights[light] = !lights[light];
    }
  }

  return lights
         .map((light, index) => {
           return (light ? index + 1 : false);
         })
         .filter(light => light !== false);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
