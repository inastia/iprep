// Array, medium
// Problem 209: Minimum Size Subarray Sum

// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a contiguous subarray
// [numsl, numsl+1, ..., numsr-1, numsr] of which the
// sum is greater than or equal to target.
// If there is no such subarray, return 0 instead.

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Input: target = 4, nums = [1,4,4]
// Output: 1

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

 // Solution: sliding window
var minSubArrayLen = function(target, nums) {

    let leftPointer = 0;
    let sum = 0;
    let result = Infinity;

    for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
      sum += nums[rightPointer];
      while (sum >= target) {
        result = Math.min(result, rightPointer - leftPointer + 1);
        sum -= nums[leftPointer];
        leftPointer++;
      }
    }

    return result;
};
