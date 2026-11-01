class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const matcher = {
            ']':"[",
            "}":"{",
            ")":"("
        }

        const stack = [];
        for (const c of s.split("")) {
            if (stack.length === 0) {
                stack.push(c);
                continue;
            }
            const candidate = matcher[c];
            if (stack[stack.length -1] === candidate) {
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
