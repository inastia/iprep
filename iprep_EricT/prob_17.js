// Problem 17
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type, properly formatted as JSON.

const myJsonObj = {
  myString: [some string],
  myNumber: [some number],
  myNull: [null],
  myBoolean: [false],
  myUndefined: [undefined], // no
  myArray: [some array],
  myFunction: [some function], // no
  myObject: [some object]
};

// Solution
// plain text used to store & transmit data

const myJsonObj = {
  myString: "job search",
  myNumber: 129,
  myNull: null,
  myBoolean: true,
  myArray: ["Lucid", "Gusto", "eBay"],
  myObject: {
    "employee":{
      "name":"Anastasia", "title": "engineer", "city":"Salt Lake City"
    }
  }
};
