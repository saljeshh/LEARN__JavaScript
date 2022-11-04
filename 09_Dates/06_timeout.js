const ingredients = ['olives', 'spanish'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients // olives, spanish natra after 3000,
);

if (ingredients.includes('spanish')) {
  clearTimeout(pizzaTimer);
}

// setInterval
setInterval(function () {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  console.log(`${hours} : ${minutes}`);
}, 1000);
