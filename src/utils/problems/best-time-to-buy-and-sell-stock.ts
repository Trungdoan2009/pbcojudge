import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeBestTimeJS = `function maxProfit(prices) {
  // Write your code here
};`;

const starterCodeBestTimeCPP = `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // Write your code here
    }
};`;

const starterCodeBestTimePython = `class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """`;

const handlerBestTime = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        const pricesList = [
            [7, 1, 5, 3, 6, 4],
            [7, 6, 4, 3, 1],
        ];

        const expectedResults = [
            5, // Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5
            0  // No transactions are done and the max profit = 0
        ];

        // loop all tests to check if the user's code is correct
        for (let i = 0; i < pricesList.length; i++) {
            // result is the output of the user's function and answer is the expected output
            const result = fn(pricesList[i]);
            assert.strictEqual(result, expectedResults[i]);
        }
        return true;
    } catch (error: any) {
        console.log("maxProfit handler function error");
        throw new Error(error);
    }
};

export const bestTimeToBuyAndSellStock: Problem = {
    id: "best-time-to-buy-and-sell-stock",
    title: "1. Best Time to Buy and Sell Stock",
    problemStatement: `<p class='mt-3'>
  You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i</code>th day.
  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
</p>
<p class='mt-3'>
  Note that you must buy before you sell.
</p>`,
    examples: [
        {
            id: 1,
            inputText: "prices = [7,1,5,3,6,4]",
            outputText: "5",
            explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.",
        },
        {
            id: 2,
            inputText: "prices = [7,6,4,3,1]",
            outputText: "0",
            explanation: "In this case, no transactions are done and the max profit = 0.",
        }
    ],
    constraints: `<li class='mt-2'>
  <code>1 ≤ prices.length ≤ 10^5</code>
</li> <li class='mt-2'>
  <code>0 ≤ prices[i] ≤ 10^4</code>
</li>`,
    handlerFunction: handlerBestTime,
    starterCodeJS: starterCodeBestTimeJS,
    order: 8,
    starterFunctionName: "function maxProfit(",
};
