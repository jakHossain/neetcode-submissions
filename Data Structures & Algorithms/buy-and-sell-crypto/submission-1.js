class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = null;
        let r =0;

        let maxProfit = 0;
        let highestPriceInd = 0;

        let lowestPrice = Infinity;
        while (r < prices.length) {
            if (prices[r] < lowestPrice) {
                l = r;
                lowestPrice = prices[r];
                highestPriceInd = l; //reset reference point
            } else if (prices[r] > prices[highestPriceInd]) {
                //only update max profit if profit higher
                maxProfit = Math.max(prices[r] - prices[l], maxProfit);
                //track last "future" highest price ind to beat next
                highestPriceInd = r;
            }
            r++;
        }

        return maxProfit;
    }
}
