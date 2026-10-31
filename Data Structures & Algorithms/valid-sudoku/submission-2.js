class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        for (let i = 0; i < 9; i++ ) {
            const seen = new Set();
            const row = board[i];
            for (let v of row) {
                if (v === ".") continue;
                if (seen.has(v)) return false;
                seen.add(v);
            }
        }

        for (let i = 0; i < 9; i++) {
            const seen = new Set();
            for (let j = 0; j < 9; j++) {
                const v = board[j][i];
                if (v === ".") continue;
                if (seen.has(v)) return false;
                seen.add(v);
            }
        }

        for (let i =0; i <9; i+=3) {
            for (let j = 0; j < 9; j +=3) {
                const seen = new Set();
                for (let r = 0; r < 3; r++) {
                    for (let c = 0; c < 3; c++) {
                        const v = board[r + i][c+j];
                        if (v=== ".") continue;
                        if (seen.has(v)) return false;
                        seen.add(v);
                    }
                }
            }
        }

        return true;

    }
}
