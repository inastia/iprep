// Array, medium
// Problem 3: Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Solution: sliding window

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length === 1) return 1;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let word = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (word.indexOf(s[j]) !== -1) break;
      else word += s[j]
    }
    result = Math.max(word.length, result);
  }
  return result;

};

// Solution: hashMap
var lengthOfLongestSubstring = function(s) {
  // keeps track of the most recent index of each letter.
  const seen = new Map();
  // keeps track of the starting index of the current substring.
  let start = 0;
  // keeps track of the maximum substring length.
  let maxLen = 0;

  for(let i = 0; i < s.length; i++) {
      // if the current char was seen, move the start to (1 + the last index of this char)
      // max prevents moving backward, 'start' can only move forward
      if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
      seen.set(s[i], i);
      // maximum of the current substring length and maxLen
      maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
}
