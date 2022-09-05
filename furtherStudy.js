'use strict';




function wordsInCommon(words1, words2) {
  const result = new Set();

  const words1Set = new Set(words1)
  const words2Set = new Set(words2)

  for (const word of words1Set) {
    result.add(word);
  }
  for (const word of words2Set) {
    result.add(word);
  }
  return Array.from(result)
}

// console.log(wordsInCommon(['hello', 'hi', 'hey'], ['hello', 'yo', 'hi']))

function kidsGame(names) {
  // Replace this with your code
}
