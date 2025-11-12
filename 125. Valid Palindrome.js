// 125. Valid Palindrome

// Given a string s, return true if after converting 
// all uppercase letters into lowercase letters and removing 
// all non‑alphanumeric characters it reads the same forward and backward.

/**
 * Parameters:
 *   @param {string} s - Input string.
 *
 * Returns:
 *   @return {boolean} - True if palindrome ignoring non-alphanumeric chars.
 *
 * Examples:
 *   Input: "A man, a plan, a canal: Panama" → true
 *   Input: "race a car" → false
 *
 * Pseudo Code:
 *   1. Remove non-alphanumeric characters, lowercase.
 *   2. Reverse string and compare to cleaned version.
 */
function isPalindromeString(s) {
  const clean = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}
/**
 * Time: O(n)
 * Space: O(n)
 */
