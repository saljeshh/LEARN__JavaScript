'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23 , Firenze,  Italy',
  categories: ['Italiano', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //opens 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // same name as obj passed
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is delicious pasta with ${ing1} and ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// rest pattern - opposite of spread

// spread because right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , risotto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, other);

// ----- in objects

// without rest and with destructuring
const { thu, fri } = restaurant.openingHours;
console.log(thu, fri);

const weekdayss = { thu, fri };
console.log(weekdayss);

// with rest pattern
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// -- functions
// rest pattern in funcion
// in spread we pass into params while we calling just opposite
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

//using spread and rest
const x = [23, 5, 7];
add(...x);

// order piozza
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spainch');
restaurant.orderPizza('mushrooms'); // rest are in empty array
