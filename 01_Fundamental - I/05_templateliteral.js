const firstName = 'saljesh';
const job = 'Engineer';
const birthYear = 2001;
const Year = 2022;

// without template literals
const hero =
  "I'm," +
  ' ' +
  'a' +
  ' ' +
  (Year - birthYear) +
  ' ' +
  'years old and im a ' +
  ' ' +
  job +
  ' !! ';

console.log(hero);

// with template literals

const newHero = `I'm, a ${Year - birthYear} years old and im a ${job} !!`;
console.log(newHero);
