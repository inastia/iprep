// Problem 18
// What order will numbers be logged out in?

function logNumbers() {
  console.log(1);
  setTimeout(function(){console.log(2)}, 1000);
  setTimeout(function(){console.log(3)}, 0);
  console.log(4);
}

logNumbers();

// Solution
1 // no time out
4 // no time out
3 // pushed into event que due to call back function
2 // time out set to 1 second
