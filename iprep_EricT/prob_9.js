// Problem 9
// what would be logged on to the console

var num = 50;

function logNumber() {
  console.log(num);
  var num = 100;
}

logNumber(); // undefined


var num = 50;

function logNumber() {
  var num = 100;
  console.log(num);
}

logNumber(); // 100 
