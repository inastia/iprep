// Problem 28
// Object properties
// what is being logged out

const a = {}; // empty object
const b = { name: 'b' }; // object with a name property of 'b' string value
const c = { name: 'c' }; // object with a name property of  'c' string value

// attempt: set property b on object a, where b is an object itself
// but: only strings are allowed as properties on objects
a[b] = 200;
a[c] = 400;

// JavaScript converts b into a string
// logs out the latest value of object a
console.log(a[b]); // 400
