class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let nonZeroProd = 1;
        let zeroCount = 0;

        for (const n of nums) {
            if (n === 0) {
                zeroCount++;
            } else {
                nonZeroProd *= n;
            }
        }

        const result = [];
        for (const n of nums) {
            if (n === 0) {
                result.push(zeroCount > 1 ? 0 : nonZeroProd);
            } else {
                result.push(zeroCount > 0 ? 0 : nonZeroProd / n);
            }
        }

        return result;

    }
}
