function groupBy(arr, key) {
  return arr.reduce((prev, curr) => {
    const groupKey = curr[key];
    if (!prev.hasOwnProperty(groupKey)) {
      prev[groupKey] = [];
    }
    prev[groupKey].push(curr);
    return prev;
  }, {});
}

const res = groupBy(
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ],
  "age"
);

console.log(res);
