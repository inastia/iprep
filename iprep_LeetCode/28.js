// Problem 28: Implement strStr()
// Given two strings needle and haystack,
// return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// Input: haystack = "hello", needle = "ll"
// Output: 2, aka the index of the first 'l'

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Solution 1: brute force O(n * m)
var strStr = function(haystack, needle) {

  // if needle is an empty string return 0
  if (needle == "") return 0;

  for (let i = 0; i < haystack.length; i++) {
    let k = i;
    j = 0;
    while (haystack[k] === needle[j] && j < needle.length) {
      // move second pointer forward
      j++;
      k++;
    }
    if (needle.length === j) return i;
  }
  return -1;
};

// Solution 2: KMP O(n + m)
