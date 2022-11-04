'use strict';
const bookings = [];

// es6 default params
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 100 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('Lh464', 2900);
createBooking('Lh44', undefined, 300);
console.log(bookings);

// how to pass args

const flight = 'LH234';
const saljesh = {
  name: 'saljesh Maharjan',
  passport: 864366,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport == 864366) {
    alert('Check In');
  } else {
    alert('Wrong Password');
  }
};

checkIn(flight, saljesh);
console.log(flight, saljesh);
