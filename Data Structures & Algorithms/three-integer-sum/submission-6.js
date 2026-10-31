class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        // numbers sroted asc
        // duplicate numbers are consecutive

        const results = new Set();
        for (let i = 0; i < nums.length; i++) {
            
            //prevent i from setting to duplicate
            // gurantees "uniquenuess"
            if (i > 0 && nums[i] === nums[i-1]) continue;
            if (nums[i]> 0) break; // if val at i is positive, then imp

            //to continue as all l and r vals will also be positive & sum > 0

            // i is "locked"
            //two ptr l and right will start at i+1 and end of nums
            // test if i + l + r add to 0, can do <= or > logic to shift

            let l = i +1;
            let r = nums.length;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r]
                //check sum first before guranteeing l/r/i uniqueness to handle [0,0,0,0] cases
                if (sum === 0) {
                    //save to set to handle dupes later
                    results.add(`${nums[i]},${nums[l]},${nums[r]}`);
                    l++;
                    r--;

                    //ensure l and r are pushed to their "furthest" distinct v
                while (l < r -1 && nums[l] === nums[l+1]){
                    l++;
                }
                while (l +1 < r && nums[r] === nums[r-1]){
                    r--;
                }
                } else if (sum < 0) {
                    l++;
                    continue;
                } else {
                    r--;
                    continue;
                }


            }
        }

        return [...results].map(r => r.split(","));
    }
}
