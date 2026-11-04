class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let targetRowIdx = -1;

        for (let i = 0; i < matrix.length; i++) {
            const row = matrix[i];
            if (row[row.length-1] === target) {
                return true
            }

            if (row[row.length-1] > target) {
                targetRowIdx = i;
                break;
            }
        }
        console.log(targetRowIdx);


        if (targetRowIdx === -1) {
            return false;
        }

        for (const n of matrix[targetRowIdx]) {
            if (n === target){
                //could do binary search for more efficiency here
                return true;
            }
        }

        return false;

    }
}
