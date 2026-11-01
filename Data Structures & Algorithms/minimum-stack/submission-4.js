class MinStack {
    #values;
    #minStack;
    constructor() {
        this.#values = [];
        this.#minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.#values.push(val);
        // push new min (or dupe min) to min stack for easy min access
        const nextMin = this.#minStack.length === 0 
        ? val 
        : Math.min(val, this.#minStack[this.#minStack.length-1]);
        this.#minStack.push(nextMin);
    }

    /**
     * @return {void}
     */
    pop() {
        this.#minStack.pop();
        return this.#values.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.#values[this.#values.length -1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.#minStack[this.#minStack.length -1];
    }
}
