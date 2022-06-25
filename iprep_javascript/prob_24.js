// Problem 24
// array indexOf, what is logged out?

console.log([10, 20, 30, 40, 50].indexOf(30)); // 2
// object is not found bc objects with the same values are still separate objects
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1
console.log('hello world'.indexOf('o')); // 4
// arrays like objects are not equivalent by value contained inside them 
console.log([[1], [2], [3], [4]].indexOf([2])); // -1
