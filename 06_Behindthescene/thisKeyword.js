//this Keyword/variable : Special varibale that is created for every execution context(every function) Takes the value of (points to) the owner fo the function which the this keyword is used

// this is not static, It depends on how the function is called, and its value is only assigned when the function is actually called

'use strict';

console.log(this); // pointed by calcAgeArrow as it looksup for parent this

// in function expression
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // strict mode then underfined else window
};
calcAge(2001);

// in arrow it doesnt have its own this
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // window in arrow . uses lexical this, of the parent
};
calcAgeArrow(2005);

// object
const saljesh = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    // saljesh is calling this fun so this === saljesh obj
    console.log(2037 - this.year);
  },
  calcAgeEnhanced() {
    console.log(this);
    console.log(2022 - this.year);
  },
};
saljesh.calcAge();
saljesh.calcAgeEnhanced();

const annika = {
  year: 2002,
};
// creating calcAge method inside annika from saljesh
// called method borrowing or copying
annika.calcAge = saljesh.calcAge;
annika.calcAge();
// we are calling method on annika so it is this now not saljesh

//---------------
// this is just regualr func call so this is undefined and undefined.year cant read properties
const f = saljesh.calcAge;
f(); // same as line 14 fn call
