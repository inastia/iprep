// Problem 2: Palindromes

function palindrome(str) {
    const reversed = str.split('').reversed().join('');

    if (reversed === str) {
      return true;
    } else {
      return false;
    } // return reversed === str;

}

console.log(palindrome('abba')); // true
console.log(palindrome('hello')); // false
