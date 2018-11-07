// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  let values = Object.keys(chars).map(key => chars[key]);
  values.sort((a,b) => b - a);
  for (let ch in chars) {
    if (chars[ch] === values[0]) {
      return ch;
    }
  }

}

module.exports = maxChar;


// function maxChar(str) {
//   const chars = {};
//   for (let char of str) {
//     if (!chars[char]) {
//       chars[char] = 1;
//     } else {
//       chars[char]++;
//     }
//   }
//
//
// }
