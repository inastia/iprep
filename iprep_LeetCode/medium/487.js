// Problem 487: Max Consecutive Ones II

/*
Given a binary array nums, return the maximum number of consecutive
1's in the array if you can flip at most one 0.
*/

/*
Input: nums = [1,0,1,1,0]
Output: 4
Explanation:
- If we flip the first zero, nums becomes [1,1,1,1,0]
and we have 4 consecutive ones.
- If we flip the second zero, nums becomes [1,0,1,1,1]
and we have 3 consecutive ones.
The max number of consecutive ones is 4.
*/

// Solution: sliding window
var findMaxConsecutiveOnes = function(nums) {
  let left = 0;
  let right = 0;
  let K = 1;

  while (right < nums.length) {
    if (nums[right] === 0) {
      K--;
    }
    if (K < 0) {
      if (nums[left] === 0) {
        K++;
      }
      left++;
    }
    right++;
  }
  return right - left;
};
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]));

// Solution: multiple pointers
// time - O(n), space - O(1)
var findMaxConsecutiveOnes = function(nums) {
  let max = 0
  let flipped = 0
  let unflipped = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      flipped++;
      unflipped++;
    } else {
      max = Math.max(max, flipped);
      flipped = unflipped + 1
      unflipped = 0;
    }
  }

  return Math.max(max, flipped);
};
