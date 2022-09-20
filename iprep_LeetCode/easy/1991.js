// Problem 1991: Find pivot index
/*
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly
to the left of the index is equal to the sum of all the numbers
strictly to the index's right.

If the index is on the left edge of the array,
then the left sum is 0 because there are no elements to the left.
This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

var pivotIndex = function (nums) {
  // calculate sum of all numbers left to right using reduce()
  let rightSum = nums.reduce((a, b) => a + b);
  var leftSum = 0;
  if (nums.length === 1) {
    return 0;
  }
  // go through numbers left to right
  for(let i = 0; i < nums.length; i++) {
    // reduce right sum by i as you interate
    rightSum = rightSum - nums[i];
    // as you recude/increase sums, check if they're equal
    // at any of the i positions
     if(rightSum === leftSum) {
    	return i;
  	}
    // increase left sum by i as you iterate
    leftSum = leftSum + nums[i];
  }
  return -1;
};
 console.log(pivotIndex([1,7,3,6,5,6]));
