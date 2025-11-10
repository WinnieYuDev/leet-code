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
