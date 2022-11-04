const flight = 'Lh234';
const saljesh = {
  name: 'saljesh Maharjan',
  passport: 3434545,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name; // it changes heap wala saljesh to

  if (passenger.passport === 3434545) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, saljesh);
console.log(flight, saljesh);

// consequences  of not using object as params correctly

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(saljesh);
checkIn(flight, saljesh);

// JS DOESNT HAVE PASS BY REFERENCE
// evene we reference for heap pool
