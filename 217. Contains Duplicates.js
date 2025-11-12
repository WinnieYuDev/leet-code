// 217. Contains Duplicate
// Easy
// Topics: Array, Hash Table

// Problem:
// Given an integer array nums, return true if any value appears at least twice 
// in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation: The element 1 occurs at indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation: All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

/**
 * Parameters:
 *   @param {number[]} nums - An array of integers.
 *
 * Returns:
 *   @return {boolean} - True if any element appears at least twice, false otherwise.
 *
 * Pseudo Code:
 *   1. Create an empty Set to track seen numbers.
 *   2. Iterate through the array:
 *        - If the number is already in the Set, return true.
 *        - Otherwise, add the number to the Set.
 *   3. If iteration finishes without duplicates, return false.
 */
function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

/**
 * Time: O(n) - we iterate once through the array
 * Space: O(n) - in the worst case all elements are unique and stored in the Set
 */
