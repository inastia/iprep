// Problem 35: Search Insert Position

// Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;

    while(start <= end) {
        var mid = start + Math.floor((end - start) / 2);

        if(nums[mid] == target) {
            return mid;
        } else if(nums[mid] > target) {
            end = mid - 1;
        } else {
           start = mid + 1;
        }
    }

    return start;
};
