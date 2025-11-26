var removeElement = function (nums, val) {
  let x = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }

  console.log(nums);
  return x;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
// let nums = [3, 2, 2, 3];
console.log(removeElement(nums, 2));
