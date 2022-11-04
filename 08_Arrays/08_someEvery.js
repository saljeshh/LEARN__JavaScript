'use strict';

/////////////////////////////////////////////////
// BANKIST APP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// some and every

console.log(movements);
console.log(movements.includes(-130));

// condition
// if there is any value some will return true
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 1500);
console.log(anyDeposits);

// every
console.log(movements.every((mov) => mov > 0));

// seperate callback
const depositt = (mov) => mov < 0;
console.log(movements.some(depositt));
console.log(movements.every(depositt));
