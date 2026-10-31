class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length < 2) {
            return true;
        }

        const alphaNumRegex = new RegExp("[a-z0-9]","i");
        let lPtr = 0;
        let rPtr = s.length-1;

        while (rPtr > lPtr) {
            while (lPtr < rPtr && !alphaNumRegex.test(s[lPtr])) {
                lPtr++;
            }

            while (rPtr > lPtr && !alphaNumRegex.test(s[rPtr])) {
                rPtr--;
            }

            if (s[lPtr].toLowerCase() !== s[rPtr].toLowerCase()) {
                return false;
            }

            lPtr++;
            rPtr--;
        }

        return true;

    }
}
