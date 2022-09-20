// Problem 448: Find All Numbers Disappeared in an Array
/*
Given an array nums of n integers where nums[i] is in the range [1, n],
return an array of all the integers in the range [1, n]
that do not appear in nums.
*/

/*
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
*/

/*
Input: nums = [1,1]
Output: [2]
*/

// Solution 1: hash map or set(), O(n)

/*
Use the length of the array to find missing values
by subtracting existing value assigned
to each iterated element from the length of the array
*/
var findDisappearedNumbers = function(nums) {
  // mySet = [4, 3, 2, 7, 8, 1]
  let mySet = new Set(nums);
  let missingNumbers = [];

  for(let i = 0; i < nums.length; i++) {
    // nums.length - 8: 8 - 4 = 4; value 4 is present
    if(!mySet.has(nums.length - i)) {
      missingNumbers.push(nums.length - i);
    }
  }
   return missingNumbers;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));

// Solution 2: O(1) in place modification
/*
mark indeces of the visited numbers, then find missing numbers
*/

var findDisappearedNumbers = function(nums) {
  // iterate the original array
  for (let i = 0; i < nums.length; i++) {
    // assign new index to every number in the array
    let newIndex = Math.abs(nums[i]) - 1;
    // mark existing indeces as negative
    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1;
    }
  }

  let missingNumbers = [];
  // iterate through numbers from 1 to N
  for (let i = 1; i <= nums.length; i++) {
    // add numbers of positive magnitute to the new array
    if (nums[i - 1] > 0) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
};
