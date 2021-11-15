'use strict';
//defualt parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price||199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const james = {
//   name: 'James Masterson',
//   passport: 374298742389432,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 374298742389432) {
//     alert('Checked In');
//   } else {
//     alert('Worng Passport');
//   }
// };

// checkIn(flight, james);
// console.log(flight);
// console.log(james);

// const flightNum = flight;
// const passenger = james;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(james);
// checkIn(flight, james);

// //passing by value vs passing by reference
// //Javascript doesnt not have passing by reference.

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher Order Function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = function () {
//   console.log('✋');
// };
// document.body.addEventListener('click', high5);

// ['James', 'Makr', 'Sam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Joe');
// greeterHey('Bama');

// greet('Hello')('Joe');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Makr');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(232, 'John Keller');
// lufthansa.book(344, 'Dave Patel');

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// //this does not work
// //book(23, 'Sarah Williams');
// book.call(eurowings, 23, 'Srash Will');
// console.log(eurowings);

// book.call(lufthansa, 244, 'Mary Jane');
// console.log(lufthansa);

// const swiss = {
//   name: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 798, 'Emma Mann');
// console.log(swiss);

// //Apply Methods

// const flightData = [334, 'Curious Jorge'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //Bind Method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'William Henry');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('John Cooper');
// bookEW23('Stew Ign');

// //With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial Application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// const runOnce = function () {
//   console.log('This will run once');
// };

// runOnce();
// //IIFE
// (function () {
//   console.log('This will run once');
//   const inPrivate = 23;
// })();

// (() => console.log('This will also run once, arrow function'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// console.log(notPrivate);

// //Closure
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

//Eg 1

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//reassinge f funciton
h();
f();
console.dir(f);

// Eg2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are not boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait & 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);
