class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, {minTimestamp: Infinity, maxTimestamp : -Infinity, values: new Map()});
        }

        const entry = this.keyStore.get(key);
        entry.values.set(timestamp, value);
        entry.minTimestamp = Math.min(entry.minTimestamp, timestamp);
        entry.maxTimestamp = Math.max(entry.maxTimestamp, timestamp);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";
        const entry = this.keyStore.get(key);
        if (timestamp < entry.minTimestamp) {
            return "";
        }

        if (timestamp >= entry.maxTimestamp) {
            return entry.values.get(entry.maxTimestamp);
        }


        const tsKeys = [...entry.values.keys()];
        let l = 0;
        let r = tsKeys.length -1;
        let prevMin = -1;

        while (l <=r) {
            const m = Math.floor((l+r)/2);
            const testTs = tsKeys[m];

            if (testTs === timestamp) {
                return entry.values.get(testTs);
            }

            if (timestamp > testTs) {
                prevMin = testTs;
                l = m+1;
            } else {
                r = m-1;
            }
        }


        return prevMin !== -1 ? entry.values.get(prevMin) : ""; 
    }
}
