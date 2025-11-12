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

// Time Complexity: O(n)
// Reason: We loop through numbers 1..n once, performing constant-time checks and concatenations per iteration.
// Impact: If n doubles, total operations roughly double → scales linearly and efficiently.

// Space Complexity: O(n)
// Reason: We store a string output for each number in result[].
// Impact: Memory grows proportionally to input size; acceptable for n ≤ 10^4.


function fizzBuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    return (num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz') || num.toString();
  });
}

// Example runs
console.log(fizzBuzz(3));   // ["1","2","Fizz"]
console.log(fizzBuzz(5));   // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15));  // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Time Complexity: O(n)
// - We iterate through numbers 1 → n once.
// - Each iteration performs constant-time arithmetic and string operations.
// - Total time grows linearly with n.
//
// Space Complexity: O(n)
// - The output array stores n strings.
// - Aside from a few small variables, no extra space is used.
// - Space grows linearly with input size.

// Why this is the best optimized:

// No string concatenation or redundant operations

// Clear early checks for divisibility

// Minimal function call overhead

// Most performant in real-world benchmarks

const fizzBuzz = n =>
  [...Array(n)].map((_, i) =>
    ((i + 1) % 3 ? '' : 'Fizz') + ((i + 1) % 5 ? '' : 'Buzz') || (i + 1).toString()
  );

// Example runs
console.log(fizzBuzz(5));   // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15));  // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Time Complexity: O(n)
// - The .map() method visits each element once, doing constant work per iteration.
//
// Space Complexity: O(n)
// - The resulting array contains n strings.
// - No additional data structures are used.

function fizzBuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    return num % 15 === 0
      ? "FizzBuzz"
      : num % 3 === 0
      ? "Fizz"
      : num % 5 === 0
      ? "Buzz"
      : num.toString();
  });
}

// Example runs
console.log(fizzBuzz(3));   // ["1","2","Fizz"]
console.log(fizzBuzz(15));  // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Time Complexity: O(n)
// - Single traversal from 1 to n.
// - Each iteration performs constant-time checks and string creation.
//
// Space Complexity: O(n)
// - Output array of size n.
// - Only constant additional space used for loop variables.