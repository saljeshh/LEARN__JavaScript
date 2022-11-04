// flat
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr.flat());
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrdep = [[[1, 3], 3], [4, [5, 6]], 7, 8];
console.log(arrdep.flat()); // level 1 dept
console.log(arrdep.flat(2)); // level 2 depth

// overall movements of all accounts
const accountMovements = accounts.map((acc) => acc.movements).flat(2);
console.log(accountMovements);

const totalBalance = accountMovements.reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance);

// flat map
/// we cannt change depth
// we dont need map as it contians both
const overallBalanceflatmap = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalanceflatmap);
