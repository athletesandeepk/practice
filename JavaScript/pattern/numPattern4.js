let n = 5;

for (i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }

  for (let k = 0; k < i + 1; k++) {
    row = row + (i + 1);
  }

  console.log(row);
}
//     1
//    22
//   333
//  4444
// 55555

for (i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }

  for (let k = 0; k < i + 1; k++) {
    row = row + (k + 1);
  }

  console.log(row);
}
//     1
//    12
//   123
//  1234
// 12345

for (i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }

  for (let k = 0; k < i + 1; k++) {
    row = row + (n - (i + 1) + (k + 1));
  }

  console.log(row);
}
//     5
//    45
//   345
//  2345
// 12345
