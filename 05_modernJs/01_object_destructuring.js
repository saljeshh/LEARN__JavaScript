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
};
// real world example of obj destructuring
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del soel, 31',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'devdhoka, 2',
});

// exact same name for object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// alias
const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(resturantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// switching / mutating
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 13 };

// putting value of obj a,b into a ,b .. mutate
// if no paranthesis it will givce syntax error as {} js expect code block, we cant assign to code block so we use ()
({ a, b } = obj);
console.log(a, b);

// --- nested obj destructuring
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
