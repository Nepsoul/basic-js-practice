/**
 You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */

/**
 * param {number[]} prices
 * return {number}
 */
//time complexity- 0(n), space complexity-0(1)
// var maxProfit = function (prices) { //this is not dynaminc programming
//   //   console.log(prices);

//   //   let stockPrice = {};
//   let buyingPrice = prices[0];
//   let profit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < buyingPrice) {
//       buyingPrice = prices[i];
//     } else {
//       let currentProfit = prices[i] - buyingPrice;
//       profit = Math.max(currentProfit, profit);
//     }
//   }
//   return profit;
// };
var maxProfit = function (prices) {
  debugger;
  if (prices.length === 0) {
    return 0;
  }

  let maxProfit = 0;
  let minPrice = prices[0];
  const memo = {}; // Memoization using a hash

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    const currentProfit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);

    // Store the maximum profit in memo for the current day
    memo[i] = maxProfit;
  }

  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
