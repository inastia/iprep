// Problem 13
// what are the values of x and y

(function() {
  var x = y = 200;
})();

console.log('y: ', y); // 200 bc 'y = 200' is a global expression
console.log('x: ', x); // undefined - cannot access outside of IIFE
