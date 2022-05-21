// Problem 11
// Curry a function

function getProduct(num1, num2) {
  return num1 * num2;
}

function getProduct(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

getProduct(5)(2);
