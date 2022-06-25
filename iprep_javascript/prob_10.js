// Problem 10
// what does using strict mode do to your code?
// what are the benefits of using strict mode?

// 1. prevents from using undeclared variables
// 2. prevents from using global variables
// 3. parameter names must be unique

x = 3.14;
console.log(x); // 3.14

"use strict";
x = 3.14;
console.log(x); // can't find variable x
