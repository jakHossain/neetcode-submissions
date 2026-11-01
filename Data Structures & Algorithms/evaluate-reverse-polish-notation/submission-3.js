class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) { 
        const operandStack = [];
        for (const v of tokens) {
            const isOp = Number.isNaN(+v);
            if (isOp) {
                const rightArg = operandStack.pop();
                const leftArg = operandStack.pop();
                let val;
                switch (v) {
                    case "+":
                    val = leftArg + rightArg;
                    break;
                case "-":
                    val = leftArg - rightArg;
                    break;
                case "/":
                    val = Math.trunc(leftArg / rightArg);
                    break;
                case "*":
                    val = leftArg * rightArg;
                    break;
                }

                operandStack.push(val);
            } else {
                operandStack.push(+v);
            }

        }
        return operandStack.pop();
        
    }
}
