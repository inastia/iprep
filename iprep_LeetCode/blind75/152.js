// Array, medium (dynamic programming)
// Problem 152: Maximum Product Subarray

// Given an integer array nums, find a contiguous non-empty
// subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let prevMax = nums[0];
   let prevMin = nums[0];
   let result = nums[0]; // in case an array is one number, result is whatever that number is 

   for (let i = 1; i < nums.length; i ++) {
     currMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);
     currMin = Math.min(prevMin * nums[i], nums[i], prevMax * nums[i]);

     prevMax = currMax;
     prevMin = currMin;

     result = Math.max(result, currMax)
   }
   return result;
};
