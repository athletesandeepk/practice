let arr1 = [12, -7, 5, -3, 9, -1, 0, 4];
let arr2 = [4, 3, 5, 43, 3];

function countNegativeNumbers(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }

  return count;
}

console.log(countNegativeNumbers(arr1));
console.log(countNegativeNumbers(arr2));
