const age = 19;

if (age === 19) {
  console.log('You are adult');
}

// boolean logic

if (age > 19 || age === 19) {
  console.log('You are adult');
}

//logical operator

const hasDriversLicense = true;
const hasGoodVison = false;

console.log(hasDriversLicense && hasGoodVison);
console.log(hasDriversLicense || hasGoodVison);

if (hasDriversLicense && hasGoodVison) {
  console.log('Can Drive');
} else {
  console.log('Can Not Drive');
}

const isTired = true;
console.log(hasDriversLicense || isTired || hasGoodVison);
