// Problem 4: Max Chars
// Given the string, return the character that is
// most used in the string

// Example: maxChar('abcccccccd') === 'c'

// Solution: 

function maxChar(str) {

  const charMap = {};
  let key = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if(charMap[char] > key) {
      key = charMap[char];
      maxChar = char;
    }
  }

    return maxChar;

  }

  maxChar('abcccccccd'); // "c"
