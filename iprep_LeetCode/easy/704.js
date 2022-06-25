// Problem 704: Binary Search

// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// set up iterative binary search function
var search = function(nums, target) {
var min = 0;
var max = nums.length - 1;
var mid;
    // do until start & end have not met/crossed
    while(min <= max) {
        // find mid point
        mid = Math.floor((max + min) / 2);
        // if the index of nums is the same as the target number
        if (nums[mid] === target) {
            return mid;
        }
        // if the index of nums is less than target number
        else if (nums[mid] < target) {
            // move starting position to the right
            min = mid + 1;
        }
        // if the index of nums is more than target number
        else {
            // move end position to the left
            max = mid - 1;
        }

    }

    return -1;
};
