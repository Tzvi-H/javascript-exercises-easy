// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

// Example:

// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

function multiplyList(nums1, nums2) {
  return nums1.reduce((acc, num, idx) => acc.concat(num * nums2[idx]), []);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]