'use strict';

// BEST PRACTISE - Never use arrow function for methods

const saljesh = {
  firstName: 'Saljesh',
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  // greet doesnt have own this so its lexical this is global
  // global, this.firstName = undefined
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

saljesh.calcAge();
saljesh.greet(); // even saljesh obj called greet , greet doenst have this as saljesh but window, because its arrow function

// function inside method

const annika = {
  firstName: 'Annika',
  year: 1982,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // for this error we have solution to copy this to self
    const self = this; // as annika is calling calcAge() so this = annika here

    const isMillenial = function () {
      //   console.log(this); // undefined
      //   console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self); // undefined
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial(); // regualr fn call so undefined

    // second solution for this error
    // as arrow function doesnt have this it will see lexical this
    const isMillenialArrow = () => {
      console.log(this); // this keyword of parent is calcAge's this i.e annika object
    };
    isMillenialArrow(); // regualr fn call so undefined
  },
};

annika.calcAge();

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  for (const args of arguments) {
    console.log(args);
  }
  return a + b;
};
addExpr(2, 3);
addExpr(2, 4, 5, 6); // we cant send and it is stored in arguments

// doesnt only have arguyments in arrow
var addArrow = (a, b) => {
  console.log(arguments); // argument is not defined
  return a + b;
};
addArrow(2, 4, 65);
