// Problem 19

// list 3 ways to create an object in JS

// Solution 1: object literal syntax
const myBoat = {
  length = 15;
  maxSpeed = 45;
  passangers = 7;
};

// Solution 2: new keyword & object cons
const student = new Object();

student.grade = 95;
student.gradePointAverage = 3.9;
student.classes = ["Java", "Adobe XD"];

student.getClasses = function() {
  return this.classes;
}

// Solution 3: constructor function

function Car(color, brand) {
  this.color = color;
  this.brand = brand;
}

Car.prototype.getColor = function() {
  return this.color;
}

const herCar = new Car("white", "Tesla");
console.log('My car is a ' + herCar);
