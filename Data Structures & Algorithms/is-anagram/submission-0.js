class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }

        const sWordMap = {}
        for (const l of s.split("")){
            if (sWordMap[l]) {
                sWordMap[l]++;
            } else {
                sWordMap[l] = 1;
            }
        }

        for (const l of t.split("")) {
            if (!sWordMap[l]) {
                return false;
            }
            sWordMap[l]--;
            if (sWordMap[l] <= 0) {
                delete sWordMap[l]
            }
        }

        return Object.keys(sWordMap).length === 0;
    }
}
