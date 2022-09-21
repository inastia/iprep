// Problem 118: Pascal's Triangle

/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the
two numbers directly above it as shown:
*/

/*
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

/*
Input: numRows = 1
Output: [[1]]
*/

var generate = function(numRows) {
  let result = [[1]];

  // to generate rows
    for (let row = 1; row < numRows; row++) {
      result.push([]);

      for (let column = 0; column <= row; column++) {
        // take adventage of indeces
        // index of 1st value in every row is 0
        // index of last value in every row is equal to index of the row itself
        if (column === 0 || column === row) {
          result[row][column] = 1;
        } else {
        // calculate elements of a row, add each pair of
        // adjacent elements of the previous row in each
        // step of the inner loop
          result[row][column] =
            result[row - 1][column - 1] + result[row - 1][column];
        }
      }
    }
	return result;
};
