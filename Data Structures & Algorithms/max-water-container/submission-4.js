class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let l = 0;
        let r = heights.length -1;

        let maxStorable = 0;
        while (l < r) {
            const width = r - l;
            const currLHeight = heights[l];
            const currRHeight = heights[r];
            const height = Math.min(currLHeight, currRHeight);
            maxStorable = Math.max(width*height, maxStorable)

            // look for taller l/r heights since at this point
            // only taller heights can lead to larger storage as width shrinks

            // only force shift on one pointer to prevent inf loop
            if (heights[l] > heights[r]) {
                //if left side has taller, then shift r down
                r--;
            } else  {
                //also in equals case
                l++;
            }
        }

        return maxStorable;
    }
}
