// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * Parameters:
 *   @param {string} s - Input string.
 *
 * Returns:
 *   @return {number} - Length of the longest substring without repeating chars.
 *
 * Examples:
 *   Input: "abcabcbb" → Output: 3 ("abc")
 *   Input: "bbbbb"    → Output: 1 ("b")
 *
 * Pseudo Code:
 *   1. Use sliding window with two pointers (left, right).
 *   2. Use a Set to store current substring chars.
 *   3. Expand right; if duplicate, remove from left.
 *   4. Track max length.
 */
function lengthOfLongestSubstring(s) {
  let set = new Set(), left = 0, max = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) set.delete(s[left++]);
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}
/**
 * Time: O(n)
 * Space: O(min(n, charset))
 */

