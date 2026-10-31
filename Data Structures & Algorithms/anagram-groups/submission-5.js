class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    
    const results = [];
    const anagramMap = {}

    let groupC = 0;
    for (const str of strs) {
        const key = str.split("").sort().join(""); //sorting chars normalizes anagrams!
        if (anagramMap[key] !== undefined){
            anagramMap[key].push(str);
        } else {
            results.push([str]);
            anagramMap[key] = results[groupC++];
        }
    }

    return results;
        
    }
}
