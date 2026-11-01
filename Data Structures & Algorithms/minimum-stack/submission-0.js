class MinStack {
    #values;
    constructor() {
        this.#values = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.#values.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
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
        let min = Infinity;
        for (const s of this.#values) {
            if (typeof s === "number") {
                min = Math.min(s, min);
            }
        }

        return min;
    }
}
