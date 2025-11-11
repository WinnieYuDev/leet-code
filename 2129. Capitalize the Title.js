// 2129. Capitalize the Title
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

 

// Example 1:

// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"
// Explanation:
// Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.
// Example 2:

// Input: title = "First leTTeR of EACH Word"
// Output: "First Letter of Each Word"
// Explanation:
// The word "of" has length 2, so it is all lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
// Example 3:

// Input: title = "i lOve leetcode"
// Output: "i Love Leetcode"
// Explanation:
// The word "i" has length 1, so it is lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
 

// Constraints:

// 1 <= title.length <= 100
// title consists of words separated by a single space without any leading or trailing spaces.
// Each word consists of uppercase and lowercase English letters and is non-empty.

function capitalizeTitle(title) {
  // Point: We need to capitalize words correctly: if the word length is 1 or 2 → all lowercase; otherwise → first letter uppercase + rest lowercase.
  // Reason: The problem defines two cases based on word length to decide casing.
  // Example: title = "First leTTeR of EACH Word" → split into ["First","leTTeR","of","EACH","Word"], then transform → ["First","Letter","of","Each","Word"] → join → "First Letter of Each Word".
  // Point: After processing each word, we join them back with spaces and return the new string.

  return title
    .split(' ')
    .map(word => {
      if (word.length <= 2) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join(' ');
}

// Time Complexity: O(n) — 
// Reason: We traverse the string once (via `split`, `map`, `slice/substring`, `join`). The cost grows linearly with the length of the input title.  
// Impact: If the title length doubles, the work roughly doubles; this is efficient for typical input sizes (max length ~100 as per constraints).  

// Space Complexity: O(n) — 
// Reason: We create an array of words (split) and new strings for each transformed word, plus the final joined string. The extra memory is proportional to the input size.  
// Impact: Memory usage grows with input size; for small titles this is trivial, but for very large strings (outside constraints) you’d want to be mindful.

// “We first split the title into words. Then, for each word, we check its length: 
// if it’s 1 or 2 letters, we convert it fully to lowercase; otherwise, we capitalize 
// the first letter and lowercase the rest. Finally, we join all the words back with spaces. 
// This runs in O(n) time because we process each character once, and uses O(n) space for the split array and transformed words.”