// CREATE A DATE
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2010 5:23:0'));
console.log(new Date('02 30 Oct 5: 30')); // gives wrong

// so we use given by js

console.log(new Date('2019-11-18T21:31:17.178Z'));

console.log(new Date(2037, 10, 19, 23, 5));

console.log(new Date(0));

// working with dates
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth() + 1); // js month is 0 based
console.log(future.getDate()); // day of the month
console.log(future.getDay()); // day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // data given by jonas   2037-11-19T09:38:05.000Z

// below two are related
// timestamp = getTime
console.log(future.getTime());
console.log(new Date(2142236285000));

console.log(Date.now());

// timestamp of now
console.log(Date.now());

// set
future.setFullYear(2040);
console.log(future);

const calcDaysPassed = (date1, date2) => date2 - date1;

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

console.log(days1);

// internationalization api
const options = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'EUR',
  //useGrouping: false, // no , seperator
};
const num = 3884590.2;
console.log(
  'NPR: ',
  new Intl.NumberFormat(navigator.language, options).format(num)
);
