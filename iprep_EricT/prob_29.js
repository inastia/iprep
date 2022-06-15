// Problem 29
// X and Y global vs local scope

var x = 10;

function y() {
    x = 100; // reassigns local variable 
    return;
    // hoisted to the top
    function x() {}
}

y();

console.log(x); // 10
