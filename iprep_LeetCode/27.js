// Problem 27: Remove element
// Given an integer array nums and an integer val,
// remove all occurrences of val in nums in-place.
// The relative order of the elements may be changed.

var removeElement = function(nums, val) {
  // return 0 if the array is empty
  if (nums.length == 0) {
    return 0;
  }

  // initialize the first pointer
  let pointer1 = 0;

  // increment pointer 2
  for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
    // if pointer 2 doesn't equal interger val
    if (nums[pointer2] != val) {
      // replace element in pointer1 with pointer2
      nums[pointer1] = nums[pointer2];
      // move pointer1
      pointer1++;
    }
  }
  // return the index of pointer 1 which is equal to val we changed 
  return pointer1;
};
