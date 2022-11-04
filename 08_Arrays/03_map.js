'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const returnedArr = movements.map(function (mov) {
  return mov * euroToUsd;
});

console.log(returnedArr);
console.log(movements);

// using for of loop for this
const returnedArrFor = [];
for (const mov of movements) {
  returnedArrFor.push(mov * euroToUsd);
}

console.log(returnedArrFor);

// using arrow + map
const usingArrow = movements.map((mov) => mov + euroToUsd);
console.log(usingArrow);

// making complex  use of terniary + arrow + map
const movementDescriptions = movements.map(
  (mov, index, arr) =>
    `Movement ${index + 1}: You ${
      mov > 0 ? 'deposited' : 'withdrawn'
    } ${Math.abs(mov)}`
);

console.log(movementDescriptions);
