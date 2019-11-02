/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
 var profit = 0;                                         // i initialised the profit at 0
 var difference = 0;									// i initialised the difference between buy and sell to 0
 for(var i = 0 ; i < prices.length; i++) {				//i and j ti iterate over the prices arrray and check the condiction
 	for(var j = 1; j < prices.length; j++) {			// diffrence is the prices of next days - prices of the day he bought 
 		difference = prices[j]- prices[i];				// if the difference is bigger than the old profit , prift became the difference
 		if(difference > profit) {
 			profit = difference ;
 		}

 	}
 }
 return profit;												// and return the diffrence
};

//


