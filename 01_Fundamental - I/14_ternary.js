let drink;
age = 14;

if (age >= 18) {
  drink = 'wine';
} else {
  drink = 'juice';
}

console.log(drink);

// using ternary operator

const drinks = age >= 18 ? 'wine' : 'juice';

console.log(drinks);

const drinkss = age >= 18 && 'wine';
console.log(drinkss);
