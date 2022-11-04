// find
// returns first withdran value only
const firstWithdrawl = movements.find((mov) => mov < 0);
console.log(firstWithdrawl);

const account = accounts.find((acc) => acc.owner === 'Saljesh Maharjan');
console.log(account);
