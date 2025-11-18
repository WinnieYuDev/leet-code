// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

// Recap: Given an integer array nums and an integer k,
// return true if there are two distinct indices i and j
// such that nums[i] == nums[j] and |i - j| <= k.

//Time Complexity: O(n)
 // scan the array once.
 // map lookups and updates are O(1) on average.
 
// Space Complexity: O(n)
// In the worst case, we store every element's index in the map.
 
 //parameters- number array as nums, distance between dups indicies as k
 // return- boolean: True if valid duplicate found, otherwise false.

var containsNearbyDuplicate = function(nums, k) {
    // Create a hash map storing the last index at which each number was seen.
    // For each index i:
    // If nums[i] is in the map:
    //  If i - map[nums[i]] <= k, return true.
    // Update map[nums[i]] = i.
    // After loop ends, return false.

    const lastIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (lastIndex.has(nums[i])) {
            if (i - lastIndex.get(nums[i]) <= k) {
                return true;
            }
        }
        lastIndex.set(nums[i], i);
    }

    return false;
};
