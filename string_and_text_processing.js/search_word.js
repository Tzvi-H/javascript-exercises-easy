/*
problem
  - Given st1 and str2, return how many times str1 appears in str2
  example
  - SEE TEST AT END
data structure
  - RegExp object
algorithm
  - create a RegExp object from the word along with the global and case inensitive flags
  - create a matches variable that is either the result of calling match on text
    or is an empty array (if no matches)
  - return the length of matches  
*/

function searchWord(word, text) {
  let regex = new RegExp(`\\b${word}\\b`, 'gi');
  let matches = text.match(regex) || [];
  return matches.length;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? seddd';

console.log(searchWord('sed', text));      // 3