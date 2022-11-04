console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(45, 12, 8, 45, 11, 90));
console.log(Math.max(45, 12, '8', 45, 11, 90));
// this doenst do parse so no 8px
console.log(Math.max(45, 12, '8px', 45, 11, 90)); // NaN

console.log(Math.min(45, 12, 8, 45, 11, 90));
console.log(Math.min(45, 12, '8', 45, 11, 90));
console.log(Math.max(45, 12, '8px', 45, 11, 90)); //NaN

console.log(Math.PI);

// area of circle Pi * r * r
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// === random
const random = Math.random();

const dice = Math.trunc(random * 6) + 1;
console.log(dice);

const rand = (min, max) => {
  return Math.trunc(Math.random() * (max - min)) + 1;
};

console.log(rand(1, 5));

// rounding off
// depend upon .5 > or < .5
console.log(Math.round(20.9));
console.log(Math.round(20.3));

// ceil = up
console.log(Math.ceil(30.8));
console.log(Math.ceil(30.2));

// it does floorfor negative
console.log(Math.ceil(-30.8)); //-30
console.log(Math.ceil(-30.2)); //-30

// floor makes to down
console.log(Math.floor(80.8));
console.log(Math.floor(80.2));

// works opposite for negative numb
console.log(Math.floor(-80.2)); // -81
console.log(Math.floor(-80.8)); // -81

// trunc removes after decimal
console.log(Math.trunc(40.8));
console.log(Math.trunc(40.2));
console.log(Math.trunc(-40.3));
console.log(Math.trunc(-40.8));

// toFixed .. returns string
console.log((2.7).toFixed(0));
console.log((2.8945).toFixed(1));

// + = Number

// here (number) is primitve so js behind the scense do boxing where it convert 2.84597 into number and perfrom the toFixed and convert back to string
console.log(+(2.84597).toFixed(4));
