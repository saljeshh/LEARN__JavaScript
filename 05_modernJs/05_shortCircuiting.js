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

// can use any data type, return any data type , short circuit evaluation
// onlt for OR
// if first value is truthy there is short circuit
// if first is falsy there is no short circuit and second one will run even if it is falsy too
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || false);
console.log(undefined || null);

// using normal terniary
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// using short circuit for &&
// if first value is falsy , there is short circut
// if first is true , it looks for second
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('-------and-------');
console.log(0 && 'jonas');
console.log(true && false);
console.log(false && true);
console.log(true && 0);

console.log('hello' && 23 && null && 'saljesh');

// pratical

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// using && for short circuiting
restaurant.orderPizza && restaurant.orderPizza('sussage', 'extraCheese');
