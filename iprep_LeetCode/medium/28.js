// Problem 28: Find the Index of the First Occurrence in a String

/*
Given two strings needle and haystack, return the index of the first
occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/*
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

*/

/*
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

// Solution 1
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
    if (needle[0] == haystack[i]) {
      if (needle === haystack.slice(i, i + needle.length)) {
        return i;
      }
    }
  }
	return -1;
};

// Solution 2
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
