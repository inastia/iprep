// Problem 9: Palindrome number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.


// Solution 1: string coversion
// step 1: use == to compare equality but not the type
// step 2: convert to string with toString()
// step 3: create a character array with split('')
// step 4: reverse it with reverse()
// step 5: join back into a string with join()

var isPalindrome = function(x) {
    return x == x.toString().split('').reverse().join('');
};


// Solution 2: mathematical approach
// step 1: if the number is less than zero return false
// step 2: copy input number into the variable y
// step 3: initialize the reverse variable with 0
// step 4: loop over the number until it's less than or equal to zero
// step 5: multiply the reversed variable with 10 and add the last digit of the number to it
// step 6: remove the last digit of y
// step 7: if the reversed number is equal to initial number, return true

var isPalindrome = function(x) {

  if (x < 0) return false;

  let y = x;
  let reversed = 0;

  while(y > 0){
    reversed = (reversed * 10) + (y % 10);
    y = (y / 10) | 0 // y = parseInt(y / 10);
  }

  return reversed == x;
};

// https://rishabh1403.com/posts/coding/leetcode/2019/12/leetcode-solution-of-palindrome-number-in-javascript
