// Array, medium
// Problem 238: Product of Array Except Self

// Given an integer array nums, return an array answer such that
// answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed
// to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time
// and without using the division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Follow up: Can you solve the problem in O(1) extra space complexity?
// (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let product = 1;
  let result = [];

  // [1, 2, 3, 4]

  for(let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }

  // [1, 1, 2, 6]

  // reset product
  product = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= product;
    product *= nums[j];
  }

  // [24, 12, 8, 6]

  return result;
};
