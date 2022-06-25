// Problem 26
// Objects and Strings
// what is logged out

var string1 = 'Tampa'; // string one is set to "Tampa"
var string2 = string1; // string two is set to string one, that is "Tampa"
string1 = 'Venice'; // string one is set to "Venice", no change to string two

console.log(string2); // "Tampa"


////////////////////////////////


var person1 = {
  name: 'Alex',
  age: 30
};

var person2 = person1;
 
person2.name = 'Kyle';

console.log(person1); // "name": "Kyle", "age": 30
