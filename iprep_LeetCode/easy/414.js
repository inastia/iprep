// Problem 414: Third Maximum Number
/*
Given an integer array nums, return the third distinct maximum
number in this array. If the third maximum does not exist,
return the maximum number.
*/

/*
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
*/

var thirdMax = function (nums) {
  let newArray = new Set(nums);
  let max;

  if (newArray.size < 3) {
    return Math.max(...newArray);
  }

  for (let i = 0; i < 3; i++) {
    max = Math.max(...newArray);
    newArray.delete(max);
  }
  
  return max;
};
console.log(thirdMax([1, 2, 3]));
