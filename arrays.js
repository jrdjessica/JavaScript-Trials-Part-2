'use strict';

const fruits = ['cherry', 'berry', 'apple'];

// 1. printIndices
function printIndices(items) {

  for (const i in items) {
    console.log(i, items[i]);
  }

}

// printIndices(fruits)

// 2. everyOtherItem
function everyOtherItem(items) {
  const fruitList = [];

  for (const i in items) {
    if (i % 2 === 0) {
      fruitList.push(items[i]);
    }
  }
  console.log(fruitList);
}

// everyOtherItem(fruits)


const nums = [1, 30, 4, 21, 100000];
// 3. smallestNItems
function smallestNItems(items, n) {
  // Print a list of the `n` smallest integers in `items`.
  //   Order the integers in descending order.
  //   You can assume that `n` will be less than the length of the list.

  nums.sort((a, b) => a - b);
  nums.reverse();
  const numbers = nums.slice(0, n);

  // console.log(nums)
  console.log(numbers);
}
// smallestNItems(nums, 3)
