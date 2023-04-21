console.log("quick");
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const sortedArray = quickSort(numbers);
console.log(sortedArray);
