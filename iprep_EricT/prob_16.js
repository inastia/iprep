// Problem 16
// build getTotal() function that can be invoked singly and doubly

function getTotal() {
    // allocate arguments
  let args = Array.prototype.slice.call(arguments);

  if (args.length === 2) {
    return args[0] + args[1];
  } else if (args.length === 1) {
    // currying 
    return function(num2) {
      return args[0] + num2;
    };
  }
}

console.log(getTotal(5, 40));
console.log(getTotal(3)(30));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
