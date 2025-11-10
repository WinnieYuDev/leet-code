// (Point, Reason, Example, Point)
// Two Sum

function twoSum(nums, target) {
  // Point: We want to find two numbers that add up to the target.
  // Reason: We can use an object to store numbers we’ve already seen for quick lookup.
  // Example: If nums = [2, 7, 11, 15] and target = 9, when we see 7, we check if 9 - 7 = 2 was seen.
  // Point: If it was, we return their indices.

  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    }
    seen[nums[i]] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// Time Complexity: O(n)
// Reason: We loop through the array once, and each lookup in the object is constant time.
// Impact: Works efficiently even for large arrays (e.g., 100,000+ elements).

// Space Complexity: O(n)
// Reason: We store each number once in the object.
// Impact: Uses more memory but much faster than a double loop (O(n²)).

// “I use a hash map to remember numbers I’ve seen.
// For each number, I check if its complement (target - num) already exists.
// This makes the solution O(n) since each lookup is constant time.
// It’s more memory-heavy than brute force, but much faster.”