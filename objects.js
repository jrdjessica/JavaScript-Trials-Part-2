'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCounts = {};

  for (const word of phrase.split(' ')) {
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts
}

// console.log(countWords('before you start open up another browser before you start before'))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }

  if (melon_prices.hasOwnProperty(price)) {
    return melon_prices[price];
  }
  else {
    return
  }
}

// console.log(getMelonsAtPrice(2.50))
