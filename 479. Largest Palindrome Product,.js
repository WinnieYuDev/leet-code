/**
 * Problem: Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * Parameters:
 *   None (hardcoded for 3-digit numbers)
 *
 * Returns:
 *   @return {number} - The largest palindrome made from two 3-digit numbers.
 *
 * Explanation:
 *   - A palindrome reads the same forward and backward.
 *   - We check all products of two 3-digit numbers (100–999).
 *   - Keep track of the largest palindrome found.
 *
 * Pseudo Code:
 *   1. Initialize maxPalindrome = 0.
 *   2. Loop a from 999 down to 100.
 *   3. Loop b from a down to 100 (avoid duplicates).
 *   4. Let product = a * b.
 *   5. If product <= maxPalindrome → break inner loop (since decreasing).
 *   6. Check if product is palindrome → update maxPalindrome if larger.
 *   7. Return maxPalindrome.
 */
function largestPalindromeProduct3Digit() {
  let maxPalindrome = 0;

  for (let a = 999; a >= 100; a--) {
    for (let b = a; b >= 100; b--) {
      const product = a * b;
      if (product <= maxPalindrome) break;

      if (isPalindrome(product)) {
        maxPalindrome = product;
      }
    }
  }

  return maxPalindrome;
}

/**
 * Helper: Check if a number is a palindrome.
 *
 * @param {number} n - The number to check.
 * @return {boolean} - True if palindrome, false otherwise.
 */
function isPalindrome(n) {
  const s = n.toString();
  return s === s.split('').reverse().join('');
}

/**
 * Time Complexity: O(n²) → 900² = 810,000 iterations (for 3-digit numbers)
 * Space Complexity: O(1)
 */

// Example Run
console.log(largestPalindromeProduct3Digit()); // Output: 906609 (913 × 993)
