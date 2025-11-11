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

function findDuplicates(nums) {
  const result = [];

  // Point: Use the values as indices to mark visited numbers by negating the number at that index.
  // Reason: Since numbers are in range [1, n], each number corresponds to a valid index.
  // Example: nums = [4,3,2,7,8,2,3,1]
  // - First 4 → index 3 → negate nums[3]
  // - Second 2 → index 1 → nums[1] already negative → duplicate
  // Point: Collect duplicates in result array.

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[index] = -nums[index];
    }
  }

  return result;
}

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