class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const topKMap = {};
        for (const n of nums) {
            topKMap[n] = topKMap[n] !== undefined ? topKMap[n] +1 : 1;
        }

        const freqMap = {}
        let largestFreq = -Infinity;
        for (let [n, freq] of Object.entries(topKMap)) {
            if (largestFreq < freq) {
                largestFreq = freq;
            }
            if (freqMap[freq]) {
                freqMap[freq].push(n);
            } else {
                freqMap[freq] = [n];
            }
        }

        const results =[];
        while (true) {
            if (results.length >= k) {
                return results.slice(0,k);
            }
            if (freqMap[largestFreq]) {
                results.push(...freqMap[largestFreq]);
            }
            largestFreq--;
        }

    }
}
