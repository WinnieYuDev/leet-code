// 697. Degree of an Array
//
// Given a non-empty array of non-negative integers nums,
// return the smallest possible length of a (contiguous) subarray 
// of nums that has the same degree as nums.
//
// The "degree" of an array is the maximum frequency 
// of any element in the array.

/**
 * Parameters:
 *   @param {number[]} nums - Input array.
 *
 * Returns:
 *   @return {number} - Length of smallest subarray with same degree as nums.
 *
 * Examples:
 *   Input: [1,2,2,3,1] → 2
 *
 * Pseudo Code:
 *   1. Track count, first, and last index for each number.
 *   2. Find max degree.
 *   3. Compute minimal subarray covering all of that degree.
 */
function findShortestSubArray(nums) {
  const map = {};
  let degree = 0, res = Infinity;
  nums.forEach((n,i)=>{
    if(!map[n]) map[n] = [i,i,1];
    else { map[n][1]=i; map[n][2]++; }
    degree = Math.max(degree, map[n][2]);
  });
  for (let n in map)
    if (map[n][2] === degree)
      res = Math.min(res, map[n][1]-map[n][0]+1);
  return res;
}
/**
 * Time: O(n)
 * Space: O(n)
 */

