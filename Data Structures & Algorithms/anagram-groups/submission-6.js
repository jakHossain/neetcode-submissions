class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    
    const results = [];
    const anagramMap = {}

    for (const str of strs) {
        const key = str.split("").sort().join(""); //sorting chars normalizes anagrams!
        if (anagramMap[key] !== undefined){
            anagramMap[key].push(str);
        } else {
            results.push([str]);
            anagramMap[key] = results[results.length -1];
        }
    }

    return results;
        
    }
}
