// Problem 14: Longest Common Prefix
// Write a function to find the longest
// common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';
  
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix

};

// Solution 2

var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";
  // prefix = [flower]
  let prefix = strs[0];

  // start looping from the second item
  for (let i = 1; i < strs.length; i++) {
    while(strs[i].indexOf(prefix) != 0) {
      // decrease the size of the string
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

longestCommonPrefix(["flower","flow","flight"]);
