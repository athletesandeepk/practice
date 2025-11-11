const arr = [-4, -3, -5];

function findLargest(array) {
  let num = -Infinity; // array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      num = array[i];
    }
  }

  return num;
}

function findSmallest(array) {
  let num = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < num) {
      num = array[i];
    }
  }

  return num;
}

console.log(findLargest(arr));
console.log(findSmallest(arr));
