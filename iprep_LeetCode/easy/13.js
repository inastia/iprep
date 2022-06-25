// Problem 13: Roman to integer
// Given a roman numeral, convert it to an integer.
// Input: s = "MCMXCIV"
// Output: 1994

var romanToInt = function(s) {

  // object with roman symbols
  const sym = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0;
  // loop through every character in s
  for (i = 0; i < s.length; i++) {
    // look at the character we're on, give its integer
    const cur = sym[s[i]];
    // look at the character at the first index, give its integer
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur; // IV -> 5 - 1 = 4
      i++;
    } else {
      result += cur;
    }
  }

  return result;
};
