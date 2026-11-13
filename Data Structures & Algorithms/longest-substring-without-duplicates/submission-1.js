class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seenMap = new Set();

        let l = 0;
        let r = l;
        let longest = 0;
        while (r < s.length) {
            const char  = s[r];
            //iterate on l until no duplicate in window 
            while (seenMap.has(char)) {
                seenMap.delete(s[l]);
                l++;
            }
            longest = Math.max(r - l +1, longest);

            seenMap.add(char);
            r++;
        }

        return longest;
    }
}
