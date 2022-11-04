let results = document.querySelector('#inputtext');
let clearbtn = document.querySelector('#clearbtn');

let calculate = (number) => {
  results.value = results.value + number;
};

let result = () => {
  try {
    results.value = eval(results.value);
  } catch (err) {
    alert('Enter the valid result');
  }
};

let clear = () => {
  console.log('click');
  results.value = '';
};
console.log(clearbtn);
clearbtn.addEventListener('click', clear);

let del = () => {
  // negative 1 is last number
  results.value = results.value.slice(0, -1);
};
