// Problem 22
// what does the code log out? true or false?

const user1 = {
  name: 'Jordan',
  age: 28,
};

const user2 = {
  name: 'Jordan',
  age: 28,
};

console.log(user1 == user2); // false
console.log(user1 === user2); // false

// two objects are never equal to each other
// objects are passed by reference, not value

const user1 = {
  name: 'Jordan',
  age: 28,
};

const user2 = user1; // referencing the same object

console.log(user1 == user2); // true
console.log(user1 === user2); // true

// turn to string to compare objects

console.log(JSON.stringify(user1) === JSON.stringify(user2)); // true
