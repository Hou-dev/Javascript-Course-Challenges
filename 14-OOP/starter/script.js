'use strict';
/*
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never create a method inside a constrcutor function
  //   this.calcAge = function(){
  //       console.log(2020 - this.birthYear);
  //   }
};

const joe = new Person('Joe', 1991);
console.log(joe);

//1. New {} is created
//2. function is called, this = {}
//3.{} linked to a prototye
//4. function automatically return {}

const jake = new Person('Jake', 1995);
const jack = new Person('Jack', 1985);
console.log(jack, jake);

console.log(joe instanceof Person);

Person.hey = function () {
  console.log('Hey there ✋');
  console.log(this);
};
Person.hey();

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

joe.calcAge();
jake.calcAge();
jack.calcAge();

console.log(joe.__proto__);
console.log(joe.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(joe));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOflinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(joe.species, jake.species);

console.log(joe.hasOwnProperty('firstName'));
console.log(joe.hasOwnProperty('species'));

//Object.prototype (top of prototype chain)
console.log(joe.__proto__.__proto__);
console.log(joe.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

//Class expression
// const PersonCl = class{}

//Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //instance method
  //Methods will be added to the .protoype property
  calcAge() {
    console.log(2020 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2020 - this.birthYear;
  }

  //Set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  //Static method
  static hey() {
    console.log('Hey there ✋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1995);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

const walter = new PersonCl('Walter White', 1960);

//1. Classes are not hoisted
//2. Classes are firs-class citizens
//3. Classes are executed in strict mode

PersonCl.hey();

//Setters and Getters

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const setven = Object.create(PersonProto);
console.log(setven);
setven.name = 'Steven';
setven.birthYear = '2002';
setven.calcAge();

console.log(setven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


//Inheritance between classes: constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2001, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);


//Class declaration ES6
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //instance method
  //Methods will be added to the .protoype property
  calcAge() {
    console.log(2020 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2020 - this.birthYear;
  }

  //Set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  //Static method
  static hey() {
    console.log('Hey there ✋');
    //console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2020 - this.birthYear
      } years old but as a student I feel more like ${
        2020 - this.birthYear + 10
      }`
    );
  }
}

//const martha = new StudentCl('Martha Jones', 2012);
const martha = new StudentCl('Martha Jones', 2000, 'Computer Science');
martha.introduce();
martha.calcAge();


//Inheritance between classes: object.create
const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const setven = Object.create(PersonProto);

const StudentsProto = Object.create(PersonProto);

StudentsProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentsProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentsProto);
jay.init('Jay', 2001, 'Computer Science');
jay.introduce();
jay.calcAge();
*/
//1 Public Fields
//2 Private Fields
//3 Public Method
//4 Private Methods
//  (there is also static version )
class Account {
  //1 Public Fields (instances)
  locale = navigator.language;

  //2 Private Fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protect property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }
  // Public Methods
  //Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  reqestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
  static helper() {
    console.log('Helper');
  }

  // 4 Private Methods
  //#approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
console.log(acc1);

// acc1._movements.push(250);
// acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(-140);
acc1.reqestLoan(1000);
//acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
//console.log(acc1.pin);
Account.helper();

// console.log(acc1.#movements);
//console.log(acc1.#pin);
//console.log(acc1.#approveLoan(100));

//Chaining
acc1.deposit(300).deposit(500).withdraw(53).reqestLoan(24000).withdraw(200);
console.log(acc1.getMovements());
