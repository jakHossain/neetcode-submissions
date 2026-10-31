class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (seen[complement] !== undefined) {
                return [seen[complement], i];
            }

            seen[nums[i]] = i;
        }
    }
}
