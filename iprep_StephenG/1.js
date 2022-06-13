// Problem 1: String reversal

// Solution 1: reverse
function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString('hello');

// Solution 2: for loop

function reverseString(str) {
  let reversed = '';

    for (let character of str) {
      reversed = character + reversed;
    }

    return reversed;
}

// Solution 3:
function reverseString(str) {
    return str.split('').reduce((rev,char) => char + rev, '');
}
