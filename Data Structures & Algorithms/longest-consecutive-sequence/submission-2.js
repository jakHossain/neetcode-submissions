class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSeq = -Infinity;
        let currLen = 0;
        let lastKey = null;
        for (const key of nums.toSorted((a,b) => a-b)) {
            if (lastKey === key) continue;
            if (lastKey === null || +lastKey === (+key - 1)) {
                currLen++;
            } else{
                longestSeq = Math.max(longestSeq, currLen);
                currLen = 1;
            }
            lastKey = key;
        }


        return Math.max(longestSeq, currLen);
    }
}
