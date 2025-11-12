//1. Two Sum
// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

// (Point, Reason, Example, Point)
// Two Sum

/**
 * Parameters:
 *   @param {number[]} nums - Array of integers.
 *   @param {number} target - Target sum.
 *
 * Returns:
 *   @return {number[]} - Indices of two numbers that add up to target.
 *
 * Examples:
 *   Input: nums = [2,7,11,15], target = 9
 *   Output: [0,1]
 *
 * Pseudo Code:
 *   1. Create a map to store {value: index}.
 *   2. For each number:
 *        - Compute complement = target - num.
 *        - If complement exists in map → return [map[complement], currentIndex].
 *        - Otherwise store num in map.
 */
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.hasOwnProperty(diff)) return [map[diff], i];
    map[nums[i]] = i;
  }
}
/**
 * Time: O(n)
 * Space: O(n)
 */
