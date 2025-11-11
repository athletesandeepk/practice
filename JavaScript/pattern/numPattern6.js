let n = 5;

for (i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;

  for (j = 0; j < i + 1; j++) {
    row = row + toggle;
    toggle = toggle === 1 ? 0 : 1;
  }

  console.log(row);
}
// 1
// 10
// 101
// 1010
// 10101

for (i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;

  for (j = 0; j < n - i; j++) {
    row = row + " ";
  }

  for (k = 0; k < i + 1; k++) {
    row = row + toggle;
    toggle = toggle === 1 ? 0 : 1;
  }

  console.log(row);
}
//      1
//     10
//    101
//   1010
//  10101
