class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length == 1) return true;

        const validChar = /[A-Za-z0-9]/i
        let lPtr = 0;
        let rPtr = s.length -1;

        while (rPtr > lPtr) {
            const lChar = s[lPtr];
            const rChar = s[rPtr];
            let hadInvalidChar = false;

            if (!validChar.test(lChar)){
                lPtr++;
                hadInvalidChar = true;
            } 
            if (!validChar.test(rChar)) {
                rPtr--;
                hadInvalidChar = true;
            }

            if (hadInvalidChar) {
              continue;
            }

            if (lChar.toLowerCase() !== rChar.toLowerCase()) {
                return false;
            }

            lPtr++;
            rPtr--;
        }

        return true;

    }
}
