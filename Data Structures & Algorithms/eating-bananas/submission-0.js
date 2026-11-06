class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r; // init to max as that gurantees r = h;
        while (l <= r) {
            let m = Math.floor((l +r) /2);
            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p/m);
            }
            if (totalTime <= h) {
                res = m;
                r = m-1; // ocntinue search in lower half for better
            } else {
                //not good enough, increase rate
                l = m +1;
            }
        }

        return res;

    }
}
