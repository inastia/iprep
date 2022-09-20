// Problem 747:  Largest Number At Least Twice of Others
/*
You are given an integer array nums where the largest
integer is unique.
Determine whether the largest element in the array is at least
twice as much as every other number in the array.
If it is, return the index of the largest element,
or return -1 otherwise.
*/
/*
Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
*/
/*
Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
*/
var dominantIndex = function(nums) {
  let max = Math.max(...nums);

  for(let i = 0; i < nums.length; i++){
    if(nums[i] != max) {
      if(max < 2 * nums[i]) {
        return -1;
      }
    }
  }
  return nums.indexOf(max);
};
console.log(dominantIndex([1,2,3,4]));

// OR

var dominantIndex = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  let max = Math.max(...nums);
  let index = nums.indexOf(max);

  for (let i = 0; i < nums.length; i++) {
    if (i !== index && nums[i] * 2 > max) {
      return -1;
    }
  }
  return index;
};
