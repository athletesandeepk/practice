const arr = [12, 43, 23, 64, 63];

function getIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(getIndex(arr, 23));
console.log(getIndex(arr, 63));
console.log(getIndex(arr, 3));
