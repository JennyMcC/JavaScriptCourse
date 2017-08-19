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
















