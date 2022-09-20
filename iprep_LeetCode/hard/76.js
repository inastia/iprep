// Array, hard
// Problem 76: Minimum Window Substring

// Given two strings s and t of lengths m and n respectively,
// return the minimum window substring of s such that every
// character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

/**
 * Create a map of the count of letters in the t string.
 * Set a result as an empty "";
 * Iterate over the s string. Decrement from the map until goal is reached.
 * Count duplicates, but only decrement count when necessary.
 * Record goal. Slide left pointer right, increment and continue.
 * Time Complexity O(N + M) N for the string and M for the t string.
 * Space Complexity O(M)  so at most M elements in the Map. M = T
 */

var minWindow = function(s, t) {
  let result = "";
  let map = new Map();
  let count = 0;

  for (let i = 0; i <= s.length; i++) {
    if (!map.has(t[i])) {
      map.set(t[i], 0);
    } else {
      map.set(t[i];
      map.get(t[i]) + 1);
    }
    map.set(t[i], map.get(t[i]) + 1)
  }
  count = map.size;

  for (let j = 0; j <= s.length; j++) {
    while ( t.includesAll(i) ) {
      // keep track of current result
      currentWindow = Math.min(result, j - i +1);
      output = output - i;
      i++;
    }


  }

  return result;

};
