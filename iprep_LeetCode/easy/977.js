// Problem 977: Squares of a Sorted Array

/*
Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number
sorted in non-decreasing order.
*/

/*
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

/*
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

// Solution: two pointers, O(n) 
var sortedSquares = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let output = [];

  for(let i = 0; i < nums.length; i++){
    let leftAbsolute = Math.abs(nums[left]);
    let rightAbsolute = Math.abs(nums[right]);

    if(leftAbsolute < rightAbsolute) {
      output.unshift(Math.pow(rightAbsolute, 2));
      right--;
    } else {
      output.unshift(Math.pow(leftAbsolute, 2));
      left++;
    }
  }
  return output;
}
