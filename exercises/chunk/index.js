// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while(index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;



// function chunk(array, size) {
//   let b = 0;
//   let bigArr = [];
//   let otherCount = 0;
//   bigArr[otherCount] = [];
//   for (let i = 0; i < array.length; i++) {
//     if (b < size) {
//       bigArr[otherCount].push(array[i])
//       b++;
//     } else {
//       b = 1;
//       otherCount++;
//       bigArr[otherCount] = [];
//       bigArr[otherCount].push(array[i]);
//     }
//   }
//   return bigArr;
// }
