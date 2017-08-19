// Function constructor
/*
var jenny = {
	name: 'Jenny',
	yearOfBirth: 1984,
	job: 'developer'
};
// Function constructor names get capitalized
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}
// OR I could have put this function in the constructor above with 'this.' instead of 'Person.prototype'
Person.prototype.calculateAge = function() {
		console.log(2017 - this.yearOfBirth)
	};
// can add a common property this way with 'prototype'
Person.prototype.lastName = 'McCargish';

var jenny = new Person('Jenny', 1984, 'developer');
var jimmy = new Person('Jimmy', 1986, 'health educator');
var katie = new Person('Katie', 1996, 'student');

jenny.calculateAge();
jimmy.calculateAge();
katie.calculateAge();

console.log(jenny.lastName);
console.log(jimmy.lastName);
console.log(katie.lastName);
*/




//////////////////////////////////////////////
// Object.create
/*
var personProto = {
	calculateAge: function() {
		console.log(2017 - this.yearOfBirth)
	}
};
// Object.create allows us to specify which object should be a prototype:
var jenny = Object.create(personProto);
jenny.name = 'Jenny';
jenny.yearOfBirth = 1984;
jenny.job = 'developer';
// another way to do it:
var jimmy = Object.create(personProto, {
	name: { value: 'Jimmy'},
	yearOfBirth: { value: 1986 },
	job: { value: 'health educator'}
});
*/




/////////////////////////////////////////
// Primatives vs Objects

// Primatives
var a = 23;
var b = a;
a = 46;
console.log(a);  // prints 46
console.log(b);  // prints 23

// Objects
var obj1 = {
	name: 'Jenny',
	age: 33
};
var obj2 = obj1;
obj1.age = 29;
console.log(obj1.age); //both will print 29. WAT.
console.log(obj2.age);

// Functions
var age = 21;
var obj = {
	name: 'Katie',
	city: 'Oxford'
};

function change(a, b) {
	a = 30;
	b.city = 'Eaton';
}

change(age, obj);

console.log(age);  // prints 30 be age is a primative and can't be changed
console.log(obj.city);  // prints Eaton bc it's inside the object











