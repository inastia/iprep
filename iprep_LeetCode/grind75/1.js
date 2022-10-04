// Problem 1: Two Sum

// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.


// Solution 1: brute force, aka for loop
function twoSum(nums, target) {
  // nested for loops indicate quandratic run time
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

const arr = [2, 7, 11, 15]

console.log(twoSum(arr, 9)); // [0, 1]

// Solution 2: two pass hash, linear
function twoSum(nums, target) {
  // hashMap is an object that stores key value pairs
  const hashMap = {}
  // first pass
  // create hash map
  for (let i = 0; i < nums.length; i++) {
    // nums[i] is an integer in the array and i its the index
    // so this line is assigning index to each key, aka integer in the array
    hashMap[nums[i]] = i; // { '2' : 0, '7' : 1, '11' : 2, '15 : 3' }
  }
  // second pass
  // find out if the array has the target minus number or complement
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap[complement] && hashMap[complement] !== i) {
      return [i, hashMap[complement]];
    }
  }
}

const arr = [2, 7, 11, 15]

console.log(twoSum(arr, 9)); // [0, 1]

// Solution 3: one pass hash
function twoSum(nums, target) {
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in hashMap) {
      return [hashMap[complement], i];
    }
    hashMap[nums[i]] = i;
  }
}

const arr = [2, 7, 11, 15]

console.log(twoSum(arr, 9)); // [0, 1]