class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length -1;
        while (l < r) {
            const mid = Math.floor((l + r) /2);
            // compare mid to r
            // this figures out if rotated array is larger on right side or not
            // if yes then we look on the left side by r at mid.
            if (nums[mid] < nums[r]) {
                r = mid;
            } else {
                l = mid +1;
            }
        }

        // both l and r converge to the smallest num's index
        return nums[r];

    }
}
