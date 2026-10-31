class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevValues = new Map();
        for (let i =0; i < nums.length; i ++) {
            const comp = target - nums[i];
            if (prevValues.has(comp)) {
                //i is always bigger in this context
                return [prevValues.get(comp), i];
            }
            //store index to retrieve later
            // keys are future complements
            prevValues.set(nums[i], i);
        }

        return [];
    }
}
