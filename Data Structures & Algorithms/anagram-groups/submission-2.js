class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    
    const results = [];
    const anagramMap = {}

    for (const str of strs) {
        const key = str.split("").sort().join("");
        if (anagramMap[key] !== undefined){
            anagramMap[key].push(str);
        } else {
            const newAnagram = [str];
            results.push(newAnagram);
            anagramMap[key] = newAnagram;
        }
    }

    return results;
        
    }
}
