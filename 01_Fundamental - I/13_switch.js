const d = new Date();
let day = d.getDay();
console.log(day);

const days = 'monday';

switch (days) {
  case 'monday':
    console.log('Good Monday!');
    break;
  case 'tuesday':
    console.log('Good Tuesday!');
    break;
  case 'wednesday':
    console.log('Good Wednesday!');
    break;
  case 'thursday':
    console.log('Good Thursday!');
    break;
  default:
    console.log('NO DAY');
    break;
}
