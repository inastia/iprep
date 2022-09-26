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
  if (!needle.length) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0] && haystack.substring(i, i + needle.length) === needle) return i;
  }

  return -1;
};

// Solution 2
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }
  return haystack.indexOf(needle);
}