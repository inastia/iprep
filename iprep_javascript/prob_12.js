// Problem 12
// function that keeps track of how many times
// it was called and returns that number

// my solution

var counter = 0;

function selfCount() {
  return counter += 1;
}

console.log(selfCount()); // 1
console.log(selfCount()); // 2
console.log(selfCount()); // 3
