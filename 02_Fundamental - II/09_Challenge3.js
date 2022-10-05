const mark = {
  fullName: 'mark masi',
  mass: 79,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'john masi',
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBmi();
john.calcBmi();

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI is higher than ${john.fullName}`);
} else {
  console.log(`${mark.fullName}'s BMI is lower than ${john.fullName}`);
}
