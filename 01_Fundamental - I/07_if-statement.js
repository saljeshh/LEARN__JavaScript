const age = 19;
const isOldEnough = age >= 18;
console.log(typeof isOldEnough);

if (isOldEnough) {
  console.log('Old Enough 🙌');
} else {
  console.log('New Enough 😢');
}

// driving license
const umer = 11;

if (umer > 16) {
  console.log('You are eligible for driving license🚗');
} else {
  const yearsLeft = 16 - umer;
  console.log(
    `You are not eligible for driving license💀 , but ${yearsLeft} years`
  );
}

// century
const birthYear = 2001;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`You were born in ${century}'st century`);
