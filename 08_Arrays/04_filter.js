'use strict';

// we use filter insetad of for of because we can chain the methods in filter, map

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// filter method
const deposits = movements.filter(function (mov) {
  return mov > 0; // true or false
});
// console.log(deposits);
// console.log(movements);

// this is using for of loop * filter
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

// withdrawal
const withdrawal = movements.filter((mov) => mov < 0);
console.log(withdrawal);
