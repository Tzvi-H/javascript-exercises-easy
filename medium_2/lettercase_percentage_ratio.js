/*
Problem
  - Given a string, return an object that has 3 properties,
    the percentages of the letters that are lowercase, uppercase, and neither
Examples
  - 'abCdef 123' => { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
  - '123'        => { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
Algorithm
  - Get the occurences of all the types of characters by
    using String.match and then getting the length of the array
  - divide all the occurences by the string length
  - call toFixed to give the number 2 decimal places.
  - add the properties into an object
*/

function letterPercentages(string) {
  let lowerOccurences = (string.match(/[a-z]/g) || []).length;
  let upperOccurences = (string.match(/[A-Z]/g) || []).length;
  let neitherOccurences = (string.match(/[^a-z]/gi) || []).length;

  let lowerPercentage =  (lowerOccurences / string.length * 100).toFixed(2);
  let upperPercentage =  (upperOccurences / string.length * 100).toFixed(2);
  let neitherPercentage =  (neitherOccurences / string.length * 100).toFixed(2);

  return {
    lowercase: lowerPercentage,
    uppercase: upperPercentage,
    neither: neitherPercentage
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }