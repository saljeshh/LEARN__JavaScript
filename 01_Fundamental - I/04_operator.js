// basic operator

const now = 2022;

const ageSaljesh = now - 2001;
const ageAney = now - 1990;

console.log(ageSaljesh, ageAney);

console.log(ageSaljesh * 2, ageAney / 2, 2 ** 3);

const firstName = 'saljesh';
const lastName = 'Maharjan';

console.log(firstName + ' ' + lastName);

let x = 10 + 5;

console.log(x);

x += 10;
console.log(x);

// comparison operator
console.log(ageSaljesh > ageAney);
console.log(ageSaljesh >= 18);

const isFullAge = ageSaljesh >= 18;
console.log(isFullAge);
console.log(typeof isFullAge);

console.log(now - 1990 > now - 2022);

// operator precedence
console.log('--------precedence--------------');

const averageAge = ageSaljesh + ageAney / 2;
console.log(averageAge);

const avgAgeNew = (ageSaljesh + ageAney) / 2;
console.log(avgAgeNew);
