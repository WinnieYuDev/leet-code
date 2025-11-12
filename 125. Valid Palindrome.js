// 125. Valid Palindrome

// Given a string s, return true if after converting 
// all uppercase letters into lowercase letters and removing 
// all non‑alphanumeric characters it reads the same forward and backward.

function isPalindrome(s) {
  // Point: Remove non-alphanumeric characters and convert to lowercase.
  // Reason: Then reversing the string and comparing is easy.
  // Example: "A man, a plan, a canal: Panama" → "amanaplanacanalpanama"
  // Point: If reversed string equals cleaned string, it’s a palindrome.

  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');

  return cleaned === reversed;
}

// Test
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                     // false

// Time Complexity: O(n) — 
// Reason: Each step (toLowerCase, replace, split, reverse, join, comparison) traverses the string or array once, so the total work scales linearly with the input size.
// Impact: If the string length doubles, the operations roughly double; it scales linearly, which is good for even long strings.

// Space Complexity: O(n) — 
// Reason: We create new strings and an array for the cleaned and reversed versions, so memory usage grows proportionally with input size.
// Impact: Doubling the string length roughly doubles the memory used; not ideal for extremely large strings, but fine for typical inputs.


// “We use two pointers starting from the beginning and end of the string. We skip any character 
// that's not alphanumeric, convert letters to lowercase, and compare the pair. If at any point 
// they differ, we return false. If we complete the scan without mismatches, it’s a palindrome. 
// This runs in O(n) time since each pointer moves through the string at most once, and uses O(1) 
// extra space since we only store indices and a helper check.”