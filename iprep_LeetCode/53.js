// Problem 53: Maximum Subarray
// Given an integer array nums, find the contiguous subarray
// (containing at least one number)
// which has the largest sum and return its sum.


// Solution: sliding window pattern, O(n)

var maxSubArray = function(nums) {
  // can't be zero because we have negative numbers
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    max = Math.max(max, nums[i]);
  }
  return max;

};
