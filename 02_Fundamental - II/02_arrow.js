const yearUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

const yearUntilRetirements = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires after ${retirement} years`;
};

function meetAney() {
  console.log(this);
}

const meetAney2 = () => {
  console.log(this);
};

