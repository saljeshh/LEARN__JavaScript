const arrNew = {
  firstName: 'saljesh',
  lastName: 'maharjan',
  age: 21,
  job: 'Machine Learning Engineer',
  friends: ['kushal', 'saugat', 'yuki'],

  showSalary: function () {
    return 5000;
  },
};

console.log(arrNew);

console.log(arrNew['firstName']);
console.log(arrNew['lastName']);

const nameKey = 'aged';
console.log(arrNew['age'] + ' ' + nameKey);

console.log(arrNew.age);
console.log(arrNew.friends);

const data = arrNew.friends;

data.map((data, index) => {
  console.log(`${index}: ${data}`);
});

console.log(arrNew.showSalary());
