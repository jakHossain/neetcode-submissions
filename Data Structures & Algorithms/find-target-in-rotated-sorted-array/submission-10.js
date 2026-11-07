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
            const m = Math.floor((l+r)/2);
            const mNum = nums[m];

            if (mNum === target){
                return m;
            }
            const lNum = nums[l];
            const rNum = nums[r];
            if (lNum <= mNum) {
                //num at m is too small, move to larger side
                if (target > mNum || target < lNum ) {
                    l = m +1;
                } else {
                    r = m -1;
                }

            } else {
                if (target < mNum || target > rNum) {
                    r = m-1;
                } else {
                    l = m+1;
                }
            }

        }

        return -1;
    }
}
