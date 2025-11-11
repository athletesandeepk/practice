for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
/**
12345
1234
123
12
1
 */

for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + i;
  }
  console.log(row);
}
// 55555
// 4444
// 333
// 22
// 1
