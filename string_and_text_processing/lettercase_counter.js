/*
problem
  - given a string, return an object that has 3 properties, 
    the occurences of letters that are uppercase, lowercase, and neither
example
  - ''         => { lowercase: 0, uppercase: 0, neither: 0 }
  - 'AbCd +Ef' => { lowercase: 3, uppercase: 3, neither: 2 }
data structure
  - an object with 'lowercase', 'uppercase', and 'neither' properties
algorithm
  - use the match method and a regex to get an array of the matches
    - for lowercase letters, use the /[a-z]/g regex
    - for uppercase letters, use the /[A-Z]/g regex
    - for letters that are neither, use the /[^A-Za-z]/g regex
  - create an object that has the uppercase, lowercase and neither properties
  - each property should have the length of the array returned by match
  *** (since match returns null if there aren't any matches, you should use match(regex) || [])
*/

function letterCaseCount(string) {
  let lowercase = string.match(/[a-z]/g) || [];
  let uppercase = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^A-Za-z]/g) || [];
  
  return { 
    lowercase: lowercase.length, 
    uppercase: uppercase.length, 
    neither: neither.length 
  }
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
