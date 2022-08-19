// Array, easy
// Problem 121: Best Time to Buy and Sell Stock

// You are given an array prices where prices[i]
// is the price of a given stock on the ith day.

// You want to maximize your profit by choosing
// a single day to buy one stock and choosing
// a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6),
// profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed
// because you must buy before you sell.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let i = 0; // left - buy
  let j = 1; // right - sell
  let maxProfit = 0;
  while (j < prices.length) {
    if (prices[i] < prices[j]) {
      let profit = prices[j] - prices[i]; // our current profit
      maxProfit = Math.max(maxProfit, profit);
    } else {
      i = j;
    }
    j++;
  }
  return maxProfit;
};

var maxProfit = function(prices) {
  let maxProfit = 0; // keep track of our profit
  let min = Number.MAX_VALUE; // keep track of smallest value we have seen
  // start at max price so that when we see a number, it will be lower than max MAX_VALUE

  // go through all the prices

  for(let i = 0; i < prices.length; i++) {
    // update the min value we have seen
    if(prices[i] < min) {
      min = prices[i]; // set min to current price
    } else { // otherwise calculate what our profit would be
      // if we sold on the day we are on
      maxProfit = Math.max(maxProfit, prices[i] - min);
    }
  }
  return maxProfit;
};
