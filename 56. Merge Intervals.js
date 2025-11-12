// 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, and return an array of the 
// non-overlapping intervals that cover all the intervals in the input.

 
/**
 * Parameters:
 *   @param {number[][]} intervals - Array of [start, end] intervals.
 *
 * Returns:
 *   @return {number[][]} - Merged non-overlapping intervals.
 *
 * Examples:
 *   Input: [[1,3],[2,6],[8,10],[15,18]]
 *   Output: [[1,6],[8,10],[15,18]]
 *
 * Pseudo Code:
 *   1. Sort intervals by start.
 *   2. Compare each with previous; merge if overlapping.
 */
function merge(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let prev = res[res.length - 1];
    if (intervals[i][0] <= prev[1])
      prev[1] = Math.max(prev[1], intervals[i][1]);
    else res.push(intervals[i]);
  }
  return res;
}
/**
 * Time: O(n log n)
 * Space: O(n)
 */
