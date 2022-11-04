const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// convert euro to usd of total deposit  3840 -> 5522
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

const totalWithdrawlUSD = movements
  .filter((mov) => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * euroToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalWithdrawlUSD);

const e = [-400, -650, -130];

const hi = e.reduce((acc, mov) => {
  return acc + mov;
}, 0);
console.log(hi);
