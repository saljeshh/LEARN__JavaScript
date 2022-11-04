const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// using for of
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited $${movement}`);
  } else {
    console.log(`You withdrew $${Math.abs(movement)}`);
  }
}

console.log('-------------------forOf with index----------------------------');

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited $${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew $${Math.abs(movement)}`);
  }
}

console.log('-------------------forEach Now----------------------------');
// using foreach
// in each iteration it runs this callback fn
movements.forEach(function (movement) {
  const output =
    movement > 0
      ? `You deposited $${movement}`
      : `You withdrew $${Math.abs(movement)}`;

  console.log(output);
});

console.log('--------------Some more about forEach----------------');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited $${movement}`);
    // console.log(array);
  } else {
    console.log(`Movement ${index + 1}: You withdrew $${Math.abs(movement)}`);
  }
});

//. maps
const currenciess = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

currenciess.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//. sets

const currenciesUnique = new Set(['USD', 'GBP', 'EUROS', 'EUR', 'EUR']);

// _ means thorw
currenciesUnique.forEach(function (value, _, map) {
  // key and value is same as set doesnt have value
  console.log(`${value}: ${value}`);
});
