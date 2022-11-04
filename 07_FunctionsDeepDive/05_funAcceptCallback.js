const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function - takes fn as parameter
const transformer = function (str, fn) {
  console.log(`Original Strings: ${str}`);
  console.log(`Transformed strings: ${fn(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('I love coding', oneWord);

// Js uses callback all the time
const high5 = function () {
  console.log('🙌');
};

document.body.addEventListener('click', high5);

['saljesh', 'annika'].forEach(high5);
