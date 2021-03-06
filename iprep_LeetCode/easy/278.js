// Problem 278: First Bad Version

// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check.
// Since each version is developed based on the previous version,
// all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out
// the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns
// whether version is bad. Implement a function to find the first bad version.
// You should minimize the number of calls to the API.

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
   return function(n) {
    let start = 1;
    let end = n;
    // do until start & end have not met/crossed
    while(start < end) {
        // calculate mid point
        let mid = start + Math.floor((end - start) / 2);
        // if mid point is not a bad version, then the bad version is
        // somewhere to the right of the current mid point
        if(!isBadVersion(mid)) {
            // move start point to the right
            start = mid + 1;
       } else {
          // pull in the end variable to the mid point to eliminate it 
           end = mid;
       }
    }
    return start;
    }

};
