// Problem 6 
// describe hoisting and how it works 

// default behavior of moving all declarations to the top of the current scope

// Example 1

function getTotal() {
    let total = 0; 

    for (var i = 0; i < 10; i++) {
        let valueAdd = i; 
        var multiplier = 2; 
        total += valueAdd * multiplier;
    }

    return total;
}

getTotal();

// this is what the function getTotal() looks like 

function getTotal() {
    let total; 
    var multiplier; 

    total = 0; 

    for (var i = 0; i< 10; i++) {
        let valueAdd;

        valueAdd = i; 
        multiplier = 2; 
        total += valueAdd * multiplier; 
    }

    return total;
}

getTotal();