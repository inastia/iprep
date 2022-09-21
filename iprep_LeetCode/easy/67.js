// Problem 67: Add Binary

/*
Given two binary strings a and b, return their sum as a binary string.
*/

/*
Input: a = "11", b = "1"
Output: "100"
*/


/*
Input: a = "1010", b = "1011"
Output: "10101"
*/

var addBinary = function(a, b) {
  // “0b” creates a number using binary of the number directly
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
  // return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};
