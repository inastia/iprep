// Problem 557: Reverse Words in a String III

/*
Given a string s, reverse the order of characters in each word
within a sentence while still preserving whitespace and initial word order.
*/

/*
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

/*
Input: s = "God Ding"
Output: "doG gniD"
*/
// Solution 1: one liner with map
var reverseWords = function(s) {
  // str.split(' '); splits words
  return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};

// Solution 2: two pointer
var reverseWords = function(s) {
  let lastSpaceIndex = -1;
  let word = s.split('');

  for (let i = 0; i <= s.length; i++) {
    if (i == s.length || word[i] == ' ') {
      let leftIndex = lastSpaceIndex + 1;
      let rightIndex = i - 1;
      while (leftIndex < rightIndex) {
        let temp = word[leftIndex];
        word[leftIndex] = word[rightIndex];
        word[rightIndex] = temp;
        rightIndex--;
        leftIndex++;
      }
      lastSpaceIndex = i;
    }
  }
  return word.join('');
};