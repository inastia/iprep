// Problem 20: Valid Parentheses

// Given a string s containing just the characters
// '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

// hint: The stack data structure can come in handy here
// in representing this recursive structure of the problem.

// solution 1

var isValid = function(s) {
    if (s === null || s.length <= 0) return true;

    var stack = [];
    for (var c of s) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }

    return !stack.length;
};

// solution 2

var isValid = function(s) {

    let closeMap = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    let charStack = [];

    // validate input
    if(s===null || s===undefined)
        return false;

    for(var i = 0; i<s.length; i++){
        let curChar = s.charAt(i);
        let topElement;
        if(closeMap[curChar] !== undefined){
            topElement = (charStack.length===0) ? '#' : charStack.pop();
            if(topElement !== closeMap[curChar])
                return false;
        }else{
            charStack.push(curChar);
        }
    }
    return charStack.length === 0;
};
