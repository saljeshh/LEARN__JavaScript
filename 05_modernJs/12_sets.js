// same as py .. unique values

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  'Risotto',
]);

console.log(ordersSet);
// Set(3) {'Pasta', 'Pizza', 'Risotto'}
// order of set is irrelevant
console.log(new Set('jonas'));

console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true like includes() in array

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Pasta');
console.log(ordersSet);

console.log(ordersSet[0]); // undefined order of set is irrelevant

// looping and prining
for (const order of ordersSet) {
  console.log(order);
}

// use case of sets
// to remove duplicate of arrays
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
console.log(staff);

//
const uniqueStaff = new Set(staff);
console.log(uniqueStaff);

// we want it to be array again so its easy
// as both are iteretables
const arryUniqueStaff = [...uniqueStaff];
console.log(arryUniqueStaff);

// we want only the unique field
const uniqueField = uniqueStaff.size;
console.log(uniqueField + ' fields are there');
