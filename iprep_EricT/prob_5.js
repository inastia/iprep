// Problem 5 
// what is 'this' keyword? how is it used?  

// this keyword is used instead of the object
// name to indicate that the property or method
// belongs to the object of the current function 

// Example 

function Hotel(name, rooms, booked) {
    // properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked; 

    // method 
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}