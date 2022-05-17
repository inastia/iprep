// Problem 1
// write a function called with tripleAdd(10)(20)(30);

// Solution 1 - traditional  

function tripleAdd(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

tripleAdd(10)(20)(30);

// Solution 2 - one line 

const tripleAdd = (num1) => (num2) => (num3) => num1 + num2 + num3;

tripleAdd(10)(20)(30);

// Currying a funtion (named after Haskell Curry), that is
// turn the following function into a sequence of functions
// that each take one argument 

function tripleAdd1(num1, num2, num3) {
    return num1 + num2 + num3;
}

tripleAdd1(10, 20, 30);