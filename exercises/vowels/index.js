// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0
}

module.exports = vowels;


// function vowels(str) {
//   let count = 0;
//   let checkers = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
//   for (let i = 0; i < str.length; i++) {
//     if (checkers.includes(str[i]) === true) {
//       count++;
//     }
//   }
//   return count;
// }
