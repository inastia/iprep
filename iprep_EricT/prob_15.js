// Problem 15.1
// what will list 2 contain when logged out

const list1 = [1, 2, 3, 4, 5]; // this is an object, passed by reference
const list2 = list1; // references the same array as list1, not the object list1

list1.push(6, 7, 8);

console.log(list2); // [1, 2, 3, 4, 5, 6, 7, 8]

// Problem 15.2
// set one array equal to the value of another array
// without referencing the same underlying data

const list1 = [1, 2, 3, 4, 5];
const list2 = list1.slice(); // copy of list 1 unaffected by future changes
list1.push(6, 7, 8);

console.log('List one: ', list1); // "List one: " [1,2,3,4,5,6,7,8]
console.log('List two: ', list2); // "List one: " [1,2,3,4,5]

// OR

const list1 = [1, 2, 3, 4, 5];
const list2 = list1.concat([]);
list1.push(6, 7, 8);

console.log('List one: ', list1);
console.log('List two: ', list2);
