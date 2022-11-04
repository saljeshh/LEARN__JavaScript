// selecting elements
console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
// html collection = live collection ../ immediately updated dom
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics<button class="btn btn--close-cookie">See more</buttton>';
// header.append(message); // last child
// header.prepend(message); // first child

// if done together then it will choose last one
header.append(message);
// header.prepend(message);

// const copy = message.cloneNode(true);
// header.append(copy);

//header.before(message); // like prepend
// header.after(message); // like append

//-========================
// delete emements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  //message.remove();
  console.log(message.parentElement); // header
  message.parentElement.removeChild(message);
});

// styles
// set inlined
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.padding = '10px';

console.log(message.style.height);
// works as we set using sytle using js
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful masi logo';

// non - standard so we need to access using getATtribute
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

// create new attricute
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// data attributes
// camel case of name
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c', 'anotherclass');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// dont use it overrides all the class names with one
logo.className = 'aney';
