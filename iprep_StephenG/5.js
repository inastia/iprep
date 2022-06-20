// Problem 5: FizzBuzz
// log out numbers from 1 to n
// print fizz for multiples of 3
// print buzz for multiples of 5
// print fizzbuss for multiples of 3 and 5

function fizzBuzz(n) {

  for (let i = 0; i <= n; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i)
    }

  }

}

fizzBuzz(15);
