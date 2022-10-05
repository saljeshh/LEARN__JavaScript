const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // c. fix this bug
    //value: Number(prompt('Degree Celsius')),
  };

  // b. ok lets find bug and we found it

  console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// a. Identify the bug
// - ok our value is not as we want there is bug

console.log('---');
const calcTempAmplitudeBug = function (t1, t2) {
  const temp = t1.concat(t2);
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const temps = temp.filter(onlyUnique);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') {
      continue;
    }

    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const array1 = [12, 'error', 45, 89, 'error'];
const array2 = [90, 12, 'error', 45, 90];

const amplitudeBug = calcTempAmplitudeBug(array1, array2);
console.log(amplitudeBug);
