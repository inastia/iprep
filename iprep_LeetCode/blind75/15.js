// Array, medium
// Problem 15: 3Sum

// Given an integer array nums, return all the triplets [nums[i],
// nums[j], nums[k]] such that i != j, i != k, and j != k, and
// nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // sort numbers in ascending order
  nums.sort((a, b) => a - b);

  // set up result to be a linked list
  const result = [];

  // for loop through numbers with i pointer from left to right
  for (let i = 0; i < nums.length - 2; i++) {
    // if statement to get rid of duplicates
    if (nums[i] != nums[i - 1]) {
      // set up two pointers
      let left = i + 1;
      let right = nums.length - 1;

      // check if number on the left is less than number on the right
      while (left < right) {
        // initiate the sum
        const sum = nums[i] + nums[left] + nums[right];
        // make sure sum equals zero
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (nums[left] == nums[left + 1]) left++;
          // make sure solution set doesn't contain duplicate triplets
          while (nums[right] == nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        }
      }
    }

  }
  return result;

};
