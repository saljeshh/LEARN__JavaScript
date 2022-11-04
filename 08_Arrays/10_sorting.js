const owners = ['jonas', 'saljesh', 'alice', 'anika', 'masifds'];

// sort mutates original array
console.log(owners.sort());
console.log(owners);

// numbers
console.log(movements);
console.log(movements.sort());

const arr = [45, 77, -12, -56, 0, 9];
console.log(arr.sort()); // not correct ans as sort works for string only

// for sorting correctly ascending order
// return < 0, A,B (keep order)
// return > 0, B,A (switch order)
const news = arr.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(arr);
// short form of avobe
arr.sort((a, b) => a - b);

console.log(news);
console.log(arr);

// for descending order
arr.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(arr);
// short form
arr.sort((a, b) => b - a);

console.log(arr);
