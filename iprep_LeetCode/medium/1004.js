// Problem 1004: Max Consecutive Ones III

/*
Given a binary array nums and an integer k,
return the maximum number of consecutive 1's
in the array if you can flip at most k 0's.
*/

/*
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

/*
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

// Solution: sliding window
var longestOnes = function(nums, k) {
  let left = 0;
  let right = 0;
  let max = k;

  while (right < nums.length) {
    if (nums[right] === 0) {
      max--;
    }
    if (max < 0) {
      if (nums[left] === 0) {
        max++;
      }
      left++;
    }
    right++;
  }
  return right - left;
};
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
