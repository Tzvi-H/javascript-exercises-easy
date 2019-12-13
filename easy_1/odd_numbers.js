/*
**problem**
Log all odd numbers between 1 and 99 (inclusive) on seperate lines

**algorithm**
1. set a counter to 1
2. while counter is less than or equal to 99
     - print counter
     - increment counter by 2
*/

// option 1
let counter = 1;

while (counter <= 99) {
  console.log(counter);
  counter += 2;
}

// option 2
for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}