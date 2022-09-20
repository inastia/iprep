// Problem 66: Plus One 
/*
You are given a large integer represented as an integer array digits,
where each digits[i] is the ith digit of the integer.
The digits are ordered from most significant to least significant
in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

// Solution 1 (123 ms)
var plusOne = function (digits) {
  let number = BigInt(digits.join(""));
  number++;
  return number.toString().split("");
};


//Solution 2 (103 ms)
var plusOne = function (digits) {
  let index = digits.length - 1;
  for (let i = index; i > -1; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
    if (i == 0) {
      digits.unshift(1);
    }
  }
  return digits;
};
