// 442. Find All Duplicates in an Array
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] 
// and each integer appears at most twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only 
// constant auxiliary space, excluding the space needed to store the output

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:
// Input: nums = [1,1,2]
// Output: [1]
// Example 3:
// Input: nums = [1]
// Output: []
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.

// Recap: We need to find all duplicates in an array where numbers are in the range [1, n].
// Input: nums = array of integers [1, n], each appears once or twice
// Output: All integers that appear twice
// Constraints: O(n) time, constant extra space (excluding output)

/**
 * Parameters:
 *   @param {number[]} nums - Array where 1 ≤ nums[i] ≤ n.
 *
 * Returns:
 *   @return {number[]} - Numbers appearing twice.
 *
 * Examples:
 *   Input: [4,3,2,7,8,2,3,1]
 *   Output: [2,3]
 *
 * Pseudo Code:
 *   1. Traverse nums.
 *   2. Use index = abs(num)-1; flip sign at that index.
 *   3. If already negative → duplicate found.
 */
function findDuplicates(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] < 0) res.push(idx + 1);
    nums[idx] = -nums[idx];
  }
  return res;
}
/**
 * Time: O(n)
 * Space: O(1)
 */


// Example runs
console.log(findDuplicates([4,3,2,7,8,2,3,1])); // [2,3]
console.log(findDuplicates([1,1,2]));           // [1]
console.log(findDuplicates([1]));               // []

// Time Complexity: O(n) —
// Reason: We traverse the array exactly once, and each lookup or negation operation is O(1).
// Impact: If the array length doubles, the number of operations roughly doubles; scales linearly and efficiently for large arrays.

// Space Complexity: O(1) —
// Reason: We use only a few extra variables (index, result array excluded), modifying the array in-place without extra memory proportional to input size.
// Impact: Memory use remains fixed regardless of array length, making it ideal for large arrays.

function findDuplicates(nums) {
  const duplicates = [];  // to store duplicate numbers

  // Go through each number in the array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Check if this number appears again later in the array
    if (nums.indexOf(num) !== i && !duplicates.includes(num)) {
      duplicates.push(num);
    }
  }

  return duplicates;  // return the list of duplicates
}

// const duplicates = []	Start an empty list for duplicates
// for (...)	Loop through every number
// nums.indexOf(num)	Find the first position of this number
// !== i	Means we’ve already seen it
// !duplicates.includes(num)	Prevent adding the same duplicate twice
// duplicates.push(num)	Add the number to the result list
// return duplicates	Give back the list of duplicates