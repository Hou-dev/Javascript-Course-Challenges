/*'use strict';
let hasDriversLiecense = false;
const passTest = true;

if (passTest) hasDriversLiecense = true;
if (hasDriversLiecense) console.log("I can drive");

function logger() {
    console.log("My name is Joe");
}
// call the fucntion
logger();

function fruitProcessor(apples, bananas) {
    console.log(apples, bananas);
    const juice = `Juice with ${apples} and not ${bananas}`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0)

console.log(appleJuice)


//fucntion deceleartion
function clacAge1(birthyear) {
    const age = 2021 - birthyear;
    return age;
}

const age1 = clacAge1(1980);
console.log(age1)
//funciton expression
const calcage2 = function (birthyear) {
    return 2021 - birthyear
}

const age2 = calcage2(1990);

console.log(age1, age2);

//Arrow function

const calcAge3 = birthAge => 2021 - birthAge;
const age3 = calcAge3(1990);
console.log(age3);

const yeartillretire = (birthAge, firstName) => {
    const age = 2037 - birthAge
    const retiremnt = 65 - age;
    return `${retiremnt} , ${firstName}`;
}

console.log(yeartillretire(1990, 'Jonas'))

function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples)
    const orangesPieces = cutFruit(oranges)

    const juice = `Juice with apples ${applePieces} and oranges ${orangesPieces}`
    return juice;
}

console.log(fruitProcessor(2, 3));


//Arrays
const friends = ['Mike', 'Stephen', 'Andreas']
console.log(friends);

const years = new Array(1889, 1882, 1999, 2999);
console.log(friends[0], years[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);

//array in array
const jonas = ['Jonas', 'Jack', friends];
console.log(jonas);


//Array Methods

const fireds = ['mike', 'sam', 'pert'];
fireds.push('jay'); //last element
console.log(fireds);

fireds.unshift('john'); //first element
console.log(fireds);

fireds.pop();
console.log(fireds);

fireds.shift();
console.log(fireds);

console.log(fireds.indexOf('sam'));

console.log(fireds.includes('sam')); // can be used to write condiitionals



//Objects


const joe = {
    fisrtName: 'Joe',
    lastName: 'Bama',
    age: 2020 - 1990,
    job: 'Contactor',
    friends: ['Nikeas', 'Tim', 'Sammy']
};

//Retriving Data from Objects
console.log(joe.fisrtName);
console.log(joe['lastName']);

const nameKey = 'Name';
console.log(joe['first' + nameKey]);
console.log(joe['last' + nameKey]);

const intreseted = prompt('What do you want to know about Joe Mama? Choose between firstName, lastName, age,job and friends');
console.log(joe[intreseted]);

if (joe[intreseted]) {
    console.log(joe[intreseted]);
} else {
    console.log('Not vaild request');
}

joe.location = 'England';
console.log(joe);

console.log(`${joe.fisrtName} has this many friends ${joe.friends.length}`);



//Object Methods


const joe = {
    fisrtName: 'Joe',
    lastName: 'Bama',
    birthYear: 1990,
    job: 'Contactor',
    friends: ['Nikeas', 'Tim', 'Sammy'],
    hasDrivers: false,
    // calcAge: function(birthYear){
    //     return 2020 = birthYear;
    // }
    // calcAge: function () {
    //     //console.log(this);
    //     return 2020 - this.birthYear;

    // }
    calcAge: function () {
        //console.log(this);
        this.age = 2020 - this.birthYear;
        return this.age;

    },

    getCliffNotes: function () {
        return `${this.fisrtName} is a ${this.calcAge()} and he has ${this.hasDrivers ? 'a' : 'no'} license`
    }
};

console.log(joe.calcAge());
console.log(joe.age);
console.log(joe.getCliffNotes());

//Loops

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Pumping weights in the gym: rep count ${rep}`);
}
*

// For Loops in Arrays

const joeRay = [
    'Joe',
    'Bama',
    2020 - 1980,
    'master',
    ['jake', 'samson', 'walker'],
    true
];

const typesRay = [];

for (let i = 0; i < joeRay.length; i++) {

    console.log(joeRay[i], typeof joeRay[i]);
    //typesRay[i] = typeof joeRay[i];
    typesRay.push(typeof joeRay[i])
}
console.log(typesRay);

const years = [1990, 1992, 1999, 2000];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2020 - years[i]);
}
console.log(ages)

//Important Statments, continue and break
console.log('ONLY STRINGS');
for (let i = 0; i < joeRay.length; i++) {
    if (typeof joeRay[i] != 'string') continue;
    console.log(joeRay[i], typeof joeRay[i]);
}

console.log('STOP AT NUMBER');
for (let i = 0; i < joeRay.length; i++) {
    if (typeof joeRay[i] != 'numbber') break;
    console.log(joeRay[i], typeof joeRay[i]);
}


//Loop array backwards and loop in loops

const joeRay = [
    'Joe',
    'Bama',
    2020 - 1980,
    'master',
    ['jake', 'samson', 'walker'],
    true
];

for (let i = joeRay.length - 1; i >= 0; i--) {
    console.log(i, joeRay[i]);
}


//loop in a loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifiting weights reputation ${rep}`);
    }
}

//while loops
let rep = 1;

while (rep <= 10) {
    rep++;
    console.log(`Lifiting weights reputation ${rep}`);
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice != 6) {
    console.log(`Dice roll is ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) console.log('Loop ended because we rolled a 6')
}
*/