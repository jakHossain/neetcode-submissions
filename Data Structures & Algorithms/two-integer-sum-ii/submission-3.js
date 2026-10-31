class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let lPtr = 0;
        let rPtr = numbers.length -1;

        while (true) {

            const testSum = numbers[lPtr] + numbers[rPtr];
            if (testSum === target) {
                return [lPtr+1, rPtr +1];
            }

            if (testSum < target) {
                lPtr++;
            } else {
                rPtr--;
            } 
        }

    }
}
