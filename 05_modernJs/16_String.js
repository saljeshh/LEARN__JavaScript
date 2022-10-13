const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);

for (const str of airline) {
  console.log(str);
}

console.log(airline.length);
console.log('B747'.length); //4
console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(5));
console.log(airline.split(' '));

const sliced = airline.slice(4);
console.log(sliced);
console.log(sliced.slice(0, 3));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')) + 1); // +1 to remove front space

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  if (seat.includes('B')) {
    console.log('Middle seat');
  } else {
    console.log('Not middle seat');
  }
};

checkMiddleSeat('11VC');

// whenever we call method on the strings
console.log(new String('saljesh'));
/**
 * 
 String {'saljesh'}0: "s"1: "a"2: "l"3: "j"4: "e"5: "s"6: "h"length: 7[[Prototype]]: String[[PrimitiveValue]]: "saljesh"

 * 
 */
console.log(typeof new String('name')); // objecyt
console.log(typeof new String('aney').slice(1)); // string

// string part II
const aero = 'Aero A380 Boeing';
console.log(aero.toLowerCase());
console.log(aero.toUpperCase());

// Fix Capitalization in name
const passenger = 'JonAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   HELLO@jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

//replacing

const price = 'USD 288,97';
const priceUS = price.replace('USD', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to door 23, boarding come door';

// replace all
console.log(announcement.replaceAll('door', 'gate'));

// regular Expressions

console.log(announcement.replace(/come/g, 'arrive')); // g = global

// booleans
const planee = 'Airbus A320neo';
console.log(planee.includes('A320'));
console.log(planee.startsWith('Air'));

if (planee.startsWith('Airbus') && planee.endsWith('neo')) {
  console.log('Plane is new Airbus');
}

// practise exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Not allowed on board');
  } else {
    console.log('Allowed on board');
  }
};

checkBaggage('I have a laptop, some foof and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Gun for my safety');

/// --- part III
console.log('a+very+nice+string'.split('+'));
console.log('Saljesh Maharjan'.split(' '));

const [firstName, lastName] = 'saljesh+annika'.split('+');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// use caase
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    // way 2
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('Jessica is a passenger of A320');
capitalizeName('Jonas saljesh');

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); //+++++++++++Go to gate 23!
console.log('sallu'.padStart(25, '+').padEnd(30, '-')); // cuz sallu is 5 20 + will be added

//realworld of padding
//credit card
const maskCreditCard = function (number) {
  const str = number + ''; // convert num to string if string - string
  const last = str.slice(-4); // last 4 num
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(45646464239867)); //**********9867
console.log(maskCreditCard('43985894453834'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed ';
console.log(message2.repeat(5));

//planes in line
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(4);
