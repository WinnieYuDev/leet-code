// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

// Constraints:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

// 697. Degree of an Array
//
// Given a non-empty array of non-negative integers nums,
// return the smallest possible length of a (contiguous) subarray 
// of nums that has the same degree as nums.
//
// The "degree" of an array is the maximum frequency 
// of any element in the array.

function findShortestSubArray(nums) {
  // Point: We need to know how often each number appears (frequency)
  // and the first and last indices where each number occurs.
  // Reason: The degree depends on frequency, and the shortest subarray 
  // with that degree spans from first to last occurrence.
  // Example: [1,2,2,3,1] → degree = 2 (for 1 and 2).
  // For 2: first = 1, last = 2 → length = 2; for 1: first = 0, last = 4 → length = 5.
  // Smallest subarray = 2.

  const count = {};    // number → frequency
  const first = {};    // number → first index
  const last = {};     // number → last index

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (first[num] === undefined) {
      first[num] = i;
    }
    last[num] = i;
    count[num] = (count[num] || 0) + 1;
  }

  const degree = Math.max(...Object.values(count));

  let minLength = nums.length;

  // Point: For all numbers that match the degree,
  // compute their subarray length = last - first + 1
  // and track the minimum.
  for (const num in count) {
    if (count[num] === degree) {
      const length = last[num] - first[num] + 1;
      if (length < minLength) {
        minLength = length;
      }
    }
  }

  return minLength;
}

// Test
console.log(findShortestSubArray([1,2,2,3,1]));    // 2
console.log(findShortestSubArray([1,2,2,3,1,4,2])); // 6


// Time Complexity: O(n)
// Reason: We iterate through nums once to fill maps (O(n)) and once over unique keys (O(k)), 
// where k ≤ n. So total is linear with respect to array length.
// Impact: Efficient even for large arrays up to 50,000 elements.

// Space Complexity: O(k)
// Reason: We store frequency, first, and last positions for each unique number.
// Impact: Memory grows with number of distinct elements, not total array size.


// “We use hash maps to track frequency, first, and last positions of each number.
// The degree of the array is the maximum frequency. Then, for all numbers with that
// frequency, we compute (last - first + 1) and pick the minimum. This runs in O(n)
// time and O(k) space, since each element is processed a constant number of times.”
