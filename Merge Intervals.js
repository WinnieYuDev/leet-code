// (Point, Reason, Example, Point)
// Merge Intervals
function merge(intervals) {
  // Point: Combine overlapping intervals into a single interval.
  // Reason: Sorting intervals by their start time helps compare them easily.
  // Example: [[1,3],[2,6],[8,10]] → 1–3 and 2–6 overlap → merge into [1,6].
  // Point: If current interval overlaps the last one, merge; otherwise, add it to the result.

  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const lastInterval = result[result.length - 1];

    if (start <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], end);
    } else {
      result.push([start, end]);
    }
  }

  return result;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// [[1,6],[8,10],[15,18]]

// Time Complexity: O(n log n)
// Reason: Sorting the intervals takes O(n log n); merging them is O(n).
// Impact: Sorting dominates, so slightly slower for huge inputs, but still efficient for typical use.

// Space Complexity: O(n)
// Reason: We store merged intervals in a separate array.
// Impact: Uses extra memory, but keeps logic simple and readable.

// “I first sort the intervals by start time, then merge overlapping ones in a single pass.
// Sorting ensures I only need one loop to check overlaps.
// The time complexity is O(n log n) because of the sort, and the merge step is linear.
// It’s a clean and efficient approach for combining overlapping ranges.”