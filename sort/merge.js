console.log("merge");
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function merge(leftArr, rightArr) {
//   const sorted = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] < rightArr[0]) {
//       sorted.push(leftArr.shift());
//     } else {
//       sorted.push(rightArr.shift());
//     }
//   }

//   return [...sorted, ...leftArr, ...rightArr];
// }

// function mergeSort(array) {
//   if (array.length < 2) {
//     return array;
//   }

//   let mid = Math.floor(array.length / 2);
//   let left = array.slice(0, mid);
//   let right = array.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// const sortedArray = mergeSort(numbers);
// console.log(sortedArray);

function merge(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

function mergerSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergerSort(left), mergerSort(right));
}
const x = mergerSort(numbers);
console.log(x);
