// Problem 88: Merge sorted array

// You are given two integer arrays nums1 and nums2,
// sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// Solution: 3 pointers, O(n)
var merge = function(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  // while we have elements in the second array
  while (second >= 0) {
    let firstVal = nums1[first];
    let secondVal = nums2[second];

    if (firstVal > secondVal) {
      nums1[i] = firstVal;
      i--;
      first--;
    } else {
      nums1[i] = secondVal;
      i--;
      second--;
    }

  }

};
