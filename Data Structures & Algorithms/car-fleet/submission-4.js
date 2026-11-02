class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if (position.length === 1) return 1;

        const pairs = [];
        for (let i = 0; i < position.length; i++) {
            pairs.push([position[i], speed[i]])
        }

        pairs.sort((a,b) => b[0]-a[0]);
        const fleets = [];
        for (const [pos,spd] of pairs ) {
            fleets.push(((target - pos )/ spd));
            if (
                fleets.length >= 2
                && fleets[fleets.length -1] <= fleets[fleets.length -2]
                ) {
                    fleets.pop();
            }
        }

        return fleets.length;
    }
}
