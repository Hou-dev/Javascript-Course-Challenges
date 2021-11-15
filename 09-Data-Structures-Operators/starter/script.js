'use strict';
//enhancing object literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enchnaced object literals
  openingHours,

  order(staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },

  orderDilivery({ staterIndex = 1, mainIndex = 0, time = '20:20', address }) {
    console.log(`Order received ${this.starterMenu[staterIndex]}
     and ${this.mainMenu[mainIndex]} will be delivered to ${address} at this ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

console.log('a+very+nice+string'.split('+'));
console.log('Joe Bama'.split(' '));

const [firstName, lastName] = 'Joe Bama'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('teao smith');

//padding a string
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('James'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(763945984));
console.log(maskCreditCard(76984758439459834));
console.log(maskCreditCard('7408237403297402394'));

//repeat method
const message2 = 'Bad Weather, All Departures are Delayed';
console.log(message2.repeat(6));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${':✈️'.repeat(n)}`);
};
planesInLine(6);
planesInLine(3);
planesInLine(2);

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B373'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else console.log('You are lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('James'));
console.log(typeof new String('James'));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix Capitalization in Names
const passenger = 'JaMeS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Compariing Emails
const email = 'helios@gmail.com';
const loginEmail = 'HeLios@GmAil.CoM \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const accouncement = 'All passengers must come to door 23';
console.log(accouncement.replace('door', 'gate'));

console.log(accouncement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Aib'));

const checkBaggage = function (item) {
  if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the new lines of Airbus planes');
    const baggage = item.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
      console.log('You are not allowed to enter the plane');
    } else {
      console.log('Welcome aboard the plane.');
    }
  }
};
checkBaggage('I have a laptop, food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('I have some snacks and a gun for protection');

/*
const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Wrong'],
]);



console.log(question);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  const answer = 3;
  //const answer = Number(prompt('Your Answer'));
  console.log(answer);
  console.log(question.get(question.get('correct') === answer));
}

//Converting maps to array

console.log([...question]);
console.log([...question.keys()]);
console.log([...question].values());

//Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
//Sets, the order is irrelavent and

const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

console.log(ordersSet);

console.log(new Set('james'));

console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
ordersSet.delete('risotto');
// ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) console.log(order);

const staff = ['waiter', 'chef', ',manager', 'chef', 'waiter'];
//putting a set into an array, they are iterable so this is easy
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['waiter', 'chef', ',manager', 'chef', 'waiter']).size);
//keep sets in mind when dealing with unique values
console.log(new Set('joebama').size);

//how to retreive and item out of the set


restaurant.orderDilivery({
  time: '23:20',
  address: 'Rio de, 22',
  mainIndex: 2,
  starterOmder: 2,
});

//Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day}`;
}
console.log(openStr);

//property values
const values = Object.values(openingHours);
console.log(values);
//entire object
const entries = Object.entries(openingHours);
console.log(entries);
//[key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}we open at ${open} and close at ${close}`);
}


if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, we are at ${open}`);
}

//methods with optional chaining
console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exit');

//arrays with optional chaining
const users = [{ name: 'James', email: 'thisisemail@mail.com' }];
console.log(users[0]?.name ?? 'User array is empty');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries());

//restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
//Nullish operator, null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);



console.log('-----OR-----');
// properties of logiacal operators, return any data type, short-circuiting
console.log(3 || 'Joe');
console.log('' || 'Joe');
console.log(true || 0);
console.log(undefined || null);

//hello short circuits the whole operationa and is the first thruthy value
console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND-----');
//and operator is opsosite of or and returns the falsey values
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('hello' && 23 && null && 'jonas');

//example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');




//destructuring
//spread operator
const arr = [1, 2, ...[3, 4]];

//rest operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherfood);

//Rest for objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushroom');


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

//spread array
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array, shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables are array, strings, maps and sets but not objects

const str = 'Joe';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta!, Ingredient 1"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];

//console.log(ingredients);
//oasing the order into onderpasta, using spread operator
//restaurant.orderPasta(...ingredients);

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//default vuiles
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 24 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//ways to switch variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log[(starter, mainCourse)];

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p, q, r] = [8, 9];
console.log(p, q, r);
*/
