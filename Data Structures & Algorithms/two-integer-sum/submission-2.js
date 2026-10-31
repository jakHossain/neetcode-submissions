class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const seen = new Map();

       for (let i = 0; i < nums.length; i++) {
        const n = nums[i]; 
        const complement = target - n; // 7 -3 = 4
        if (seen.has(complement)) {
            return [i, seen.get(complement)];
        }
        seen.set(n, i) // has 3 at ind 
       }

       return [];
    }
}
