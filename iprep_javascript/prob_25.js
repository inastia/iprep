// Problem 25
// equivalent numbers

console.log(900.9 === 300.3 * 3); // false
// toFixed returns a string, use Number() to return a number
console.log(900.9 === Number((300.3 * 3).toFixed(2))); // true
