// Problem 704: Binary Search 
// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

var search = function(nums, target) {
var min = 0;
var max = nums.length - 1;
var mid;

    while(min <= max) {
        mid = Math.floor((max + min) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            min = mid + 1;
        }
        else {
            max = mid - 1;
        }

    }

    return -1;
};
