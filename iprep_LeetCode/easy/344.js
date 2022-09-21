// Problem 344: Reverse String

/*
Write a function that reverses a string.
The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
*/

/*
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

/*
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

// Solution 1: built in JS function
var reverseString = function(s){
  return s.reverse();
}

// Solution 2: two pointers
var reverseString = function (str) {
  var left = 0;
  var right = str.length - 1;

  while (left <= right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
};
