const arr = [23, 6, 55, 55, 32, 56, 33];

function findSecondLargest(array) {
  if (array.length < 2) return null;

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = array[i];
    } else if (array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}

console.log(findSecondLargest(arr));

console.log(2 + 2);
