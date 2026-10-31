class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        const result = [];

        for (let i = 0; i < nums.length; i ++) {
            if (nums[i] > 0) break; //all positive now, impossible to get to 0
            if (i>0 && nums[i] === nums[i-1]) continue; // make sure each i is different as it's our anchor

            let l = i +1;
            let r = nums.length -1;
            //also ensures l < length
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum === 0) {
                    result.push([nums[i], nums[l], nums[r]]);
                    
                    //get to one before the next unique l/r
                    while (l < r && nums[l] === nums[l+1]) l++;
                    while (l < r && nums[r] === nums[r-1]) r--;
                    l++;
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }

            }
        }

        return result;
    }
}
