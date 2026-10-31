class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encoded = [];
        for (const s of strs) {
            const lenKey = s.length + "#";
            encoded.push(lenKey + s);
        }

        return encoded.join("");
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            //each loop should decode a string
            const lenKeyIdx = i;
            while (str[i] !== '#') {
                i++;
            }

            //current string to decode length
            const strLen = +(str.slice(lenKeyIdx, i));

            // i +1 to account for delimiter #
            const offset = strLen + i +1;
            result.push(str.slice(i +1, offset));
            i = offset;
        }

        return result;

    }
}
