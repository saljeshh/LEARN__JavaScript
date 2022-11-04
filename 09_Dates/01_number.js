console.log(12 === 12.0); // true

// we work in base 10

console.log(0.1 + 0.2); // it gives werired value 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // falsse

// conversion
console.log(Number('23'));
console.log(+'20'); // 20 we can replace + with Number

// parsing
console.log(Number.parseInt('30px')); // removes after last number
console.log(Number.parseFloat('2.4px'));

// it wont work
console.log(Number.parseInt('e123')); // NaN

// we can use withour Number as parse are the global function
console.log(parseInt('12rem'));

// Check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20')); // false cuz Number('20') = 20 i.e number
console.log(Number.isNaN(23 / 0));

// check if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20')); // true
console.log(Number.isFinite(23 / 0)); // false

//
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
