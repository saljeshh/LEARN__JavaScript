'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book('564', 'saljesh');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  // we are trying to use book method of lufthansa
};

const book = lufthansa.book;
// this is normal fn call so , this is undefined
// book(23, 'salj');

// we can fix this by

// cal method
book.call(eurowings, 23, 'saljesh');
console.log(eurowings);

book.call(lufthansa, 239, 'annika');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 569, 'kushal');

// apply method
// it takes array not like call
const flightData = [545, 'Yuki'];
book.apply(swiss, flightData);

// using destructuring and call instead of APPLY
book.call(swiss, ...flightData);

// BIND method
// it returns
// we can do bind once and use many times than call
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(567, 'Success');

// specific for Eurowings flight 23
const bookEW23 = book.bind(eurowings, 23);
// only name because flight no is already preset
bookEW23('sallu');

// situations where we use
// `1. With Event Listners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // this will be button buy
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// 2. Partial applications - preset params

const addTax = (rate, value) => {
  return value + value * rate;
};
console.log(addTax(0.1, 200));

// we use all the time , assume
// NEPAL tax is fix 13% so we fix in bind methods
const addVATNepal = addTax.bind(null, 0.13); // null = this if we dont need

console.log(addVATNepal(2000));

// Using Higher order function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(5000));
