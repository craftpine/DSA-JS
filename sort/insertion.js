console.log("insert");
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertSort(array) {
//   const length = array.length;

//   for (let i = 0; i < length; i++) {
//     if (array[i] < array[0]) {
//       //  move the number to the first position
//       numbers.unshift(array.splice(i, 1)[0]);
//     } else {
//       for (let j = 1; j < i; j++) {
//         if (array[i] > array[j - 1] && array[i] < array[j]) {
//           array.splice(j, 0, array.splice(i, 1)[0]);
//         }
//       }
//     }
//   }
// }

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

insertionSort(numbers);
console.log(numbers);
