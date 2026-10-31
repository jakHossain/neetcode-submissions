class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //normalize and then compare
        return t.split("").sort().join("") === s.split("").sort().join("");
    }
}
