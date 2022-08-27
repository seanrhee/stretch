/*Create a function maxProfit, which, given a list of stock prices for
a given day returns the maximum profit that could have been made by buying
a stock at the given price and then selling the stock later on. */

const maxProfit = function(prices) {
  let mostProfit = {
    profit: 0,
    buyFor: null,
    sellFor: null
  };

  for (let i = 0; i < prices.length; i++) {
    for (let x = i + 1; x < prices.length; x++) {
      let profit = (prices[i] - prices[x]) * -1;

      if (profit >= mostProfit.profit) {
        mostProfit.profit = profit;
        mostProfit.buyFor = `$${prices[i]}`;
        mostProfit.sellFor = `$${prices[x]}`;
      }
    }
  }

  return mostProfit;
};

// console.log(maxProfit([45, 24, 35, 31, 40, 150, 11, 165]));