'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();
// }

// const firstName = 'Saljesh';
// calcAge(2001);

const calcAge = (birthYear) => {
  const age = 2037 - birthYear;

  const printAge = () => {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'annika';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str); // notdefined as const is block scoped so not access outside block i.e if here
    console.log(millenial);
    // it will work as var is not lexical scoped
    add(3, 4); // function are also block scoped only for strict mode
  };
  printAge();
};

const firstName = 'Saljesh';
calcAge(1991);

// we cant access age and printAge() because const is lexical scope
// so function and age wont be accessible.
