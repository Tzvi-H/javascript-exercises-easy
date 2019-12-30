/*
Problem
  - Given a string. Print the longest sentence (based on how many words it has)
    and how many words it has.
  - Sentences end in periods, exclamation point, and question marks.
Algorithm
  - Given a string
  - Split the string into an array of sentences.
    You can use a regex. split on whitespace that follow .!?
    the regex looks like this /(?<=[.?!])\s/
    \s means whitespace
    (?<=[.?!]) means it follows a '.', '?', or a '!'
  - create a sentence variable
  - create highestWordCount set to 0
  - loop over sentences
    - if the current sentence wordCount (SUBPROCESS) is > than highestWordCount
        - set sentence to the current sentence
        - set highestWordCount to the current sentence wordcount
  - print the longest sentence
  - print "The longest sentence has <n> words."
*/
function longestSentence(text) {
  let sentences = text.split(/(?<=[.?!])\s/);
  let result;
  let highestWordCount = 0;

  sentences.forEach(sentence => {
    let currentWordCount = sentence.split(' ').length;
    if (currentWordCount > highestWordCount) {
      highestWordCount = currentWordCount;
      result = sentence;
    }
  });

  console.log(result);
  console.log(`The longest sentence has ${highestWordCount} words.`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.