// Problem 6: Array Chunking
// given an array and chunk size divide the array
// into many subarrays where each subarray is of chunk size
// chunk([1, 2, 3, 4], 2) --> [[1, 2] [3, 4]]

// Solution 1

function chunk(array, size) {
  // create an empty array to hold new chunks
  const chunked = [];
  // iterate through the original array
  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if(!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

chunk([1, 2, 3, 4], 2); // [[1, 2] [3, 4]]

// Solution 2: slice
function chunk(array, size) {
  const chunked = [];
  // index is changing over time, so use let, not const
  let index = 0;
  // run only while index is less than the length of the original array
  while (index < array.length) {
    // slice statement
    chunked.push(array.slice(index, index + size));
    // move on to the next index by incrementing with size variable
    index += size;
  }

  return chunked;
}

chunk([1, 2, 3, 4], 3); // [[1, 2, 3,] [4]]
