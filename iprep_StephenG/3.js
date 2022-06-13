// Problem 3: Integer Reversal

// reverseInt(15) = 51;
// reverseInt(-97) = -79;

// Solution 1: parseInt

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  if (n < 0) {
    return parseInt(reversed) * -1;
  }

  return parseInt(reversed);
}

// Solution 2: Math.sign

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-51)); // - 15
console.log(reverseInt(51)); // 15
