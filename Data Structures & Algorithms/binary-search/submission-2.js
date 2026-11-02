class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let l = 0;
        let r = nums.length -1;
        while (l <= r) {
            const m = l + Math.floor((r-l) /2);
            console.log("before" ,m,l,r)
            const testVal = nums[m]
            if (testVal === target) {
                return m;
            } else if (testVal > target) {
                r = m-1;
            } else {
                l = m +1;
            }
        }

        return -1;
    }
}
