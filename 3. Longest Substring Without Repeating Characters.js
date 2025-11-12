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

// (Point, Reason, Example, Point)
// Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
  // Point: Find the longest substring with all unique characters.
  // Reason: Use a sliding window and a Set to track characters currently in the substring.
  // Example: "abcabcbb" → "abc" is the longest before a repeat ('a') appears.
  // Point: Adjust the window to remove duplicates, keeping only unique characters.

  let set = new Set();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[start]);
      start++;
    }
    set.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")

// Time Complexity: O(n)
// Reason: Each character is added and removed from the Set once.
// Impact: Scales linearly with string length — very efficient for long strings.

// Space Complexity: O(min(n, charset))
// Reason: The Set stores at most one of each unique character.
// Impact: Memory use grows with distinct characters, not total length (e.g., ~26 for English letters).

// “I use a sliding window with a Set to track unique characters.
// When I see a duplicate, I shrink the window from the left until it’s unique again.
// Each character is processed once, so the time complexity is O(n).
// This is a classic window pattern for substring problems.”

//duplicates of array
//degrees of array to continue studying later
