// 412. Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Constraints:
// 1 <= n <= 10^4

function fizzBuzz(n) {
  const result = [];

  // Iterate from 1 to n (inclusive)
  for (let i = 1; i <= n; i++) {
    let value = '';

    // If divisible by 3 → add "Fizz"
    if (i % 3 === 0) value += 'Fizz';
    // If divisible by 5 → add "Buzz"
    if (i % 5 === 0) value += 'Buzz';

    // If neither, use the number itself
    result.push(value || i.toString());
  }

  return result;
}

// Example runs
console.log(fizzBuzz(3));   // ["1","2","Fizz"]
console.log(fizzBuzz(5));   // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15));  // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

/**
 * Parameters:
 *   @param {number} n - Positive integer.
 *
 * Returns:
 *   @return {string[]} - Array with numbers or "Fizz", "Buzz", "FizzBuzz".
 *
 * Examples:
 *   Input: 5 → ["1","2","Fizz","4","Buzz"]
 *
 * Pseudo Code:
 *   1. Loop 1..n.
 *   2. Append "Fizz" if divisible by 3, "Buzz" if by 5.
 *   3. Use combined string or number if none.
 */
function fizzBuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    const str = (num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz');
    return str || String(num);
  });
}
/**
 * Time: O(n)
 * Space: O(n)
 */
