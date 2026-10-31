class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const seen = {}

       for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
       const complement = target - n;
        if (complement in seen){
            return [i, seen[complement]];
        }
        seen[n] = i;
       }

       return [];
    }
}
