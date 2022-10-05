/// all revise

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

yearsUntilRetirement(2001, 'saljesh');

function calcAge(birthYear) {
  return 2037 - birthYear;
}
