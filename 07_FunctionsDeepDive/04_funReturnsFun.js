const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('saljesh');
greeterHey('annika');

// front one retursn sth
greet('Hello')('Weried function');

// using arrow function for above
const greet2 = (greeting) => {
  return (name) => console.log(`${greeting} ${name}`);
};

const gree2Simplified = (greeting) => (name) =>
  console.log(`${greeting} ${name}`);

greet2('Hey')('saljesh');

gree2Simplified('Hello')('Weried arrow function');
