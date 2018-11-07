// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let arr = n.toString().split('');
  let intArr = ['-'];
  if (arr[0] === '-') {
    for (let i = arr.length - 1; i > 0; i--) {
      intArr.push(arr[i]);
    }
  } else {
    intArr.pop();
    for (let i = arr.length - 1; i >= 0; i--) {
      intArr.push(arr[i]);
    }
  }
  let intN = intArr.join('');
  return Number(intN);
}

module.exports = reverseInt;


// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');
//
//   return parseInt(reversed) * Math.sign(n);
// }
