'use strict';
//Practice code

// function calcAge(birthYear) {
//   const age = 2020 - birthYear;
//   console.log(firstName + ' ' + age);

//   function printAge() {
//     const output = `You are ${firstName}, born in ${age}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear < 1996) {
//       var millenial = true;
//       const str = `You are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         a + b;
//       }
//       //const output = 'New Output';
//     }
//     console.log(millenial);
//     //console.log(add(2,3)) // can only be used in the if scope above or if we are not in strict mode
//   }
//   printAge();
//   return age;
// }

// const firstName = 'John';
// calcAge(1990);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'John';
// let job = 'Writer';
// const year = 1990;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

// if (!numbProducts) deleteShoppingCart();

// var numbProducts = 10; //

// function deleteShoppingCart() {
//   console.log('All contents removed');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(y === window.y);

//this keyword

// console.log(this);
// //this keyword is undefined and has its own this keyword
// const calcAge = function (birthYear) {
//   console.log(2020 - birthYear);
//   console.log(this);
// };
// calcAge(1990);

// //this keyword is lexical, and is window in the global scope
// const calcAgeArrow = birthYear => {
//   console.log(2020 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1990);

// const joe = {
//   year: 1990,
//   calcAge: function () {
//     console.log(this);
//     console.log(2020 - this.year);
//   },
// };
// joe.calcAge();

// const matt = {
//   year: 2014,
// };
// //method borrowing
// matt.calcAge = joe.calcAge;

// matt.calcAge();

// const f = joe.calcAge;
// f();

// const jonas = {
//   firstName: 'jonas',
//   year: 1991,
//   calcAge: function () {
//     //solution 1
//     // console.log(this);
//     // console.log(2037 - this.year);
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     //solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   //this keyword is a window in this arrow function
//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();
// jonas.calcAge();

// //arugments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);

// var addArrow = (a, b) => {
//   return a + b;
// };

// addArrow(2, 5, 8);

// let age = 20;
// let oldAge = age;
// age = 43;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'joel',
//   age: 30,
// };

// const friend = me;
// friend.age = 25;
// console.log('Friend', friend);
// console.log('Me', me);
