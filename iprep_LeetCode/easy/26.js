// Problem 26: Remove Duplicates from Sorted Array
// return count of unique numbers in sorted array
// return the unique numbers listed at the front of the array
// do not create a new array

// Solution: two pointers

var removeDuplicates = function(nums) {
  // check if the array is empty
  if (nums.length === 0) {
    return 0;
  }

  // initialize the first pointer
  let pointer1 = 0;

  // increment pointer 2
  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    // compare the two elements referenced by the pointers
    if (nums[pointer1] !== nums[pointer2]) {
      // move pointer1
      pointer1++;
      // replace element in pointer1 with pointer2
      nums[pointer1] = nums[pointer2];
    }
  }
  // the +1 accounts for index 0
  return pointer1 + 1;
};
