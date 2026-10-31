class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complementMap = new Map();
        for (const [i, n] of nums.entries()) {
            const complement = target - n;
            const exists = complementMap.has(complement); // verify existence so we don't overwrite smaller indx
            if (exists) {
                return [complementMap.get(complement), i];
            }

            complementMap.set(n, i);
        }
    }
}
