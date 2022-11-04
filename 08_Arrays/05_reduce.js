const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// reduce method
const balance = movements.reduce((accumulator, current, index, arr) => {
  console.log(`Iteration ${index} ${accumulator}`);
  return accumulator + current;
}, 0); // 0 is inital value of accumulator
console.log(balance);

// using for of loop
let newBalance = 0; // inital
for (const mov of movements) newBalance += mov;
console.log(newBalance);

// reduce
// get maximum value of movements array
console.log(movements);
const max = movements.reduce((acc, mov) => {
  // acc > mov ? acc : mov;
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
