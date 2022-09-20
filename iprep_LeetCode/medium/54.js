// Problem 54: Spiral matrix

/*
Given an m x n matrix, return all elements of the matrix in spiral order.
*/

/*
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

// O(m*n)

var spiralOrder = function (matrix) {
  // initiate result array
  let result = [];
  // initiate boundaries
  let top = 0; // row beg
  let bottom = matrix.length - 1; // row end
  let left = 0; // column beg
  let right = matrix[0].length - 1; // column end

  while (top <= bottom && left <= right) {
    // get every element in the top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
//[1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
// [1,2,3,4,8,12,11,10,9,5,6,7]
