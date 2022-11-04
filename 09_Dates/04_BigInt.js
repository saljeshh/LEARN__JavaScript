console.log(2 ** 53 - 1); // normal js can store
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);

console.log(3457328957928437598347598);
// 3.4573289579284377e+24 see js cant handle so use bigint now

// we use big int by adding 'n' at the end

console.log(3457328957928437598347598n); //3457328957928437598347598n

// operations we can do

console.log(10000n + 10000n); // 20000n
console.log(4578943579843n * 4589379547n); // possible

const huge = 448957943857934n;
const num = 23;

console.log(huge * num); // error
console.log(huge * BigInt(num)); // possible

console.log(20n > 15);
console.log(20n === 20); // stict mode no type cohesion so wont work
console.log(typeof 20n); // bigint
console.log(20 == 20); // no strict mode so works

// sth doestn work
console.log(Math.sqrt(4534395834095834053n));

// divisions

console.log(10n / 3n); // removes decimals

console.log(10 / 3);
