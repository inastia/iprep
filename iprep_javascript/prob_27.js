// Problem 27
// Strings and Arrays

const data1 = 'Jordan Smith';

// filter() created a new array
const data2 = [].filter.call(data1,
  // function evaluates to true or false and places element into data2 array
  function(elem, index) {
    return index > 6;
});

console.log(data2); // ['s', 'm', 'i', 't', 'h']

// can use 'read-only' array methods on strings (map, some, every, etc)
// cannot use methods to manipulate the string  (push, pop, reverse, shift, etc)
