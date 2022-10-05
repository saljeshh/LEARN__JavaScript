'use strict';
const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolhins, avgKoalas);

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= avgKoalas && avgKoalas * 2) {
    return `Dohins win(${avgDolhins} vs. ${avgKoalas}) 🥇🥇`;
  } else if (avgKoalas >= avgDolhins && avgDolhins * 2) {
    return `Kolas win(${avgKoalas} vs. ${avgDolhins}) 🥇🥇`;
  } else {
    return `No winner⛔`;
  }
};

checkWinner(avgDolhins, avgKoalas);
