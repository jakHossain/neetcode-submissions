class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const results = Array.from({length: temperatures.length},() => 0);
        const stack = []
        for (let i = 0; i < temperatures.length; i++){
            const t = temperatures[i];

            while (stack.length > 0) {
                const entry = stack[stack.length -1]
                const tToBeWarmerThan = entry[0];
                if (t > tToBeWarmerThan) {
                    results[entry[1]] = i - entry[1];
                    stack.pop();
                } else {
                    //iterates until either stack is cleared or
                    // we hit a new temp ref
                    break;
                }
            }

            stack.push([t, i]);
        }

        return results;
    }
}
