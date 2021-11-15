const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

dogs.forEach(function (item) {
  item.recommendedFood = Math.trunc(item.weight ** 0.75 * 28);
});
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose)

dogs.forEach(function (dogs) {
  if (dogs.owners.includes('Sarah')) {
    if (dogs.curFood > dogs.recommendedFood) {
      console.log(`Sarah's dog is eating too much`);
    } else {
      console.log(`Sarah's dog is not eating too much`);
    }
  }
});

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

const ownersEatTooLittle = dogs
  .filter(dogs => dogs.curFood < dogs.recommendedFood)
  .map(dogs => dogs.owners)
  .flat();
const ownersEatTooMuch = dogs
  .filter(dogs => dogs.curFood > dogs.recommendedFood)
  .map(dogs => dogs.owners)
  .flat();
// dogs.forEach(function (dogs) {
//   if (dogs.curFood > dogs.recommendedFood) {
//     ownersEatTooMuch.push(dogs.owners);
//   } else {
//     ownersEatTooLittle.push(dogs.owners);
//   }
// });
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
console.log(`${dogs.some(dogs => dogs.curFood === dogs.recommendedFood)}`);

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)

// Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10).
console.log(
  `${dogs.some(
    dogs =>
      dogs.curFood > dogs.recommendedFood * 0.9 &&
      dogs.curFood < dogs.recommendedFood * 1.1
  )}`
);

const okayEating = dogs =>
  dogs.curFood > dogs.recommendedFood * 0.9 &&
  dogs.curFood < dogs.recommendedFood * 1.1;

// 7.  Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
const okayArray = dogs
  .filter(okayEating)
  .map(dogs => dogs.owners)
  .flat();
console.log(okayArray);

// Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)

const shallowDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(shallowDogs);
