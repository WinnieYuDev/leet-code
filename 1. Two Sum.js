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
  // Create an empty object to store numbers we've seen so far.
  // The key will be the number itself, and the value will be its index in the array.

  for (let i = 0; i < nums.length; i++) {
    // Loop through the array, one number at a time.

    const diff = target - nums[i];  
    // Find the difference between the target and the current number.
    // Example: if target = 9 and current number = 7, diff = 2.
    // We’re basically asking: “Have we seen a number that equals this diff before?”

    if (map.hasOwnProperty(diff)) return [map[diff], i];
    // Check if that "difference" number exists in our map.
    // If it does, that means we found two numbers that add up to target!
    // Return their indices: [index of the diff number, index of current number]

    map[nums[i]] = i;  
    // Otherwise, store the current number and its index in the map
    // so we can use it later if it’s needed to make a target sum.
  }
}
/**
 * Time: O(n)
 * Space: O(n)
 */
