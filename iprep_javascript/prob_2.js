// Problem 2
// what is an IIFE? why are they used?

// IIFE - Immediately Invoked Function Expression, 
// a function that runs as soon as its defined.

// Use - limit number of global variables for code that 
// doesn't need to be used again, aka preserve private scope.


// Example 1

(function(){
    console.log('Hello, world!');
})(); 

// Example 2

(function getTotal(a, b){
    return a + b;
})(10, 20);

// Example 3 

(function doubleNumber(num){
    return num * 2;
})(5);