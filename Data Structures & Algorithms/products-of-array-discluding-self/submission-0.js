class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let totalProduct = 1;
        let zeroCount = 0;
        for (const n of nums) {
            // zero nukes, but may have some combo where it shouldn't            
            if (n !== 0){
            totalProduct = totalProduct * n;
            } else {
                zeroCount++;
            }
        }

        const result = [];

        for (let i = 0; i < nums.length; i++) {
            const atIdx = nums[i];
            if (atIdx === 0) {
                const prod = zeroCount > 1 ? 0 : totalProduct;
                result.push(prod)
            } else {

            result.push(zeroCount > 0 ? 0: totalProduct / atIdx);
            }

        }

        return result;
    }
}
