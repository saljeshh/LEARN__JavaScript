// falsy values in js

/*
    0, '', undefined, null, NaN, false
*/

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(undefined)); // false
console.log(Boolean('saljesh')); // true
console.log(Boolean({})); // true
console.log(Boolean({ name: 'saljesh' })); //true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(false)); // false
console.log(Boolean('')); // false

if (!Boolean(undefined)) {
  console.log('helo');
}

const money = 0;

// in if () if we dont specify js will convert to boolean and 0 is falsy
if (money) {
  console.log('Dont spend it all');
} else {
  console.log('You should get a job');
}
