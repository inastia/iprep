// Problem 498: Diagonal Traverse

/*
Given an m x n matrix mat, return an array of all the
elements of the array in a diagonal order.
*/

/*
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
*/

/*
Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
*/

var findDiagonalOrder = function(matrix) {
    if (matrix.length === 0) {
    return [];
  }
  let arrayMap = new Map();
  let result = [];

  // loop through the matrix, store each element by the sum
  // of its indices in a map,
  // you have a collection of all elements on shared diagonals
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++) {
      if (!arrayMap.has(i + j)){
        arrayMap.set(i + j, [matrix[i][j]]);
      } else {
        arrayMap.set(i + j, [...arrayMap.get(i+j), matrix[i][j]]);
      }
    }
  }

  let isDown = false;

  // use the parity of the sum of coordinates to
  // determine the direction of traversal (going up or down)
  arrayMap.forEach((x) => {
    if (isDown) {
      result.push(...x);
    } else {
      result.push(...x.reverse());
    }
    isDown = !isDown;
  });

  return result;
};
