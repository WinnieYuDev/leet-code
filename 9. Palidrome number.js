// 9. Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Follow-up: Could you solve it without converting the integer to a string?


/**
 * Parameters:
 *   @param {number} x - Integer input.
 *
 * Returns:
 *   @return {boolean} - True if x is a palindrome, else false.
 *
 * Examples:
 *   Input: 121 → true
 *   Input: -121 → false
 *
 * Pseudo Code:
 *   1. If x < 0 → false.
 *   2. Convert x to string.
 *   3. Compare reversed string with original.
 */
function isPalindrome(x) {
  if (x < 0) return false;
  const s = x.toString();
  return s === s.split('').reverse().join('');
}
/**
 * Time: O(n)
 * Space: O(n)
 */

function isPalindrome(x) {
  // Negative numbers and numbers ending with 0 (except 0 itself) cannot be palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversedHalf = 0;

  // Reverse half of the number
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // For even-length numbers, x === reversedHalf
  // For odd-length numbers, remove the middle digit: reversedHalf / 10
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

// Examples
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
console.log(isPalindrome(0));     // true

// Time Complexity: O(log10(n))
// Reason: We reverse only half of the digits. Each iteration removes one digit from x (division by 10).
// Space Complexity: O(1)
// Reason: Only a few integer variables are used, no extra arrays or strings.