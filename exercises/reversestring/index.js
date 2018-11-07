// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('asdf');

module.exports = reverse;


// function reverse(str) {
//   let otherStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     otherStr += str[i];
//   }
//   return otherStr;
// }


// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }
