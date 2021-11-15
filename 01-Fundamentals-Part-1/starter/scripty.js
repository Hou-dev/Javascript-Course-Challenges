/* let js = 'amazing';
//if (js === 'amazing')
//    alert("Javascript is FUN!");
40 + 12 - 2 - 10;
console.log(40 + 12 - 2 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);

let myFirstJob = 'Sales'; // This is the normal naming convention in javascript
let mySecondJob = 'Programmer';

let PI = 3.14; // Using upper case letters signifies this is a constant var

// VAriable name and testing output
let country = 'United States';
let continent = 'North America';
let population = '390 Million';

console.log(country);
console.log(continent);
console.log(population);

//Boolean test
let booleanTest = false;
console.log(booleanTest);
console.log(typeof booleanTest);
console.log(typeof firstName);

let day; //undefined variable
console.log(day);

const birthDay = 11; //immutable variables

// basic operations
const currentYear = 2020;
const agejoe = currentYear - 1990;
const ageSara = currentYear - 1988;
console.log(agejoe * 2, ageSara / 2, 4 ** 2);
//4 ** 2 is 4 to the power of 2


//concat strings
console.log('Jay' + ' ' + 'Saw');

//Math opearators
let x = 10 + 90;
x -= 22; // minus 22 from x
x--; //minus value by 1
console.log(x)

//comparision operators
console.log(ageSara > agejoe);
console.log(agejoe >= 18, 'Is Joe older than 18');

//operator precedance
let x, y;
x = y = 20 - 2 - 10;
console.log(x, y);

const avgAge = (agejoe + ageSara) / 2
console.log(ageSara, agejoe, avgAge);

const yourName = 'Jonas';
const jobStatus = 'Teacher';
const birthYear = 1990;
const currentYear = 2020;

const joes = "I'm " + yourName + ', a ' + (currentYear - birthYear) + ' years old ' + jobStatus + '!';
console.log(joes);

//const joesnew = `I'm $(yourName), a $(currentYear-birthYear)`;
//console.log(joesnew);()

//if else staements
const age = 12;
const isOlder = age >= 18;
if (isOlder) {
    console.log('Jake can begin testing');
} else {
    const yearLeft = 18 - age;
    console.log(`Connot begin testing, wait another ${yearLeft}`);
}

const birthYear = 1990;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//conversion of strings to number
const inputYear = '1992';
console.log(Number(inputYear) + 18);

//producing a Number that is a string will result in NaN
console.log(Number('Joey'))
console.log(String(33), 13);

//type corcsion javascript
console.log('I am ' + 20 + ' years old');
console.log('23' = '11' - 3);
console.log('24' / '2');
console.log('43' > '88')


//falsy: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log((undefined));
console.log('Joe');
console.log('');

const money = 0;
if (money) {
    console.log('Dont spend it all');
} else {
    console.log('Get a job');
}

let height;
if (height) {
    console.log("its defined")
} else {
    console.log('Undefined')
}

const age = '18';
if (age === 21) console.log('you are an old enought to drink'); //strict
if (age == 21) console.log('you old enough to drink'); //loose

const favourite = Number(prompt("what is you favorite number"));
console.log(favourite);

if (favourite === 23) {
    console.log('23 is a amazing number')
} else if (favourite == 7) {
    console.log('7 is a amazing')
} else {
    console.log('not 23 or 7')
}

if (favourite !== 23) {
    console.log('why not 23');
}

const hadDL = true;
const hasVision = true;
const isTired = true;

console.log(hasVision && hadDL);
console.log(hasVision || hadDL);
console.log(!hasVision);

const shouldDrive = hasVision && hadDL;

if (shouldDrive && !isTired) {
    console.log('good to drive')
} else {
    console.log("should not go")
}


const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Its Monday');
        break;
    case 'tuesday':
        console.log('Its Tusday');
        break;
    case 'wednesday':
        console.log('Its Wednesday');
        break;
    default:
        console.log('Not a day in the week');
}
*/

//Ternary Operator
const age = 23;
age <= 18 ? console.log('I love to eat appples') : console.log('I love to eat bananas');

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink);
