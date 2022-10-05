const inputYear = '2001';
const converted = Number(inputYear);
console.log(converted + 18);

console.log(`${String(converted)} is your birthYear`);

console.log(Number('saljesh'));

console.log(typeof NaN); // number

console.log(isNaN(NaN)); // true

console.log(Number(NaN)); // NaN

console.log(Number(NaN) === NaN); // boolean

// JS converts any value of string to number if - * / is performed

console.log(15 - '2'); // 13
console.log(15 + '2'); // 152
