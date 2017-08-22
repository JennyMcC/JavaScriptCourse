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
/*
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

console.log(age);  // prints 21 bc age is a primative and can't be changed
console.log(obj.city);  // prints Eaton bc it's inside the object
*/





/////////////////////////////////////////
//  Lecture: Passing Functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2017 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el)); //math.round will simply round the answer to the problem
	} else {
		return -1;
	}
}

// Putting it all together: (could use different arrays and functions here)
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/





////////////////////////////////////////////////////
// Lecture: Functions returning Functions
/*
function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) { // name is the actual name of the person
			console.log(name + ', can you please explain what UX design is?');
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	} else if (job === 'recruiter') {
		return function(name) {
			console.log(name + ', what area do you specialize in?');
		}
	} else {
		return function(name) {
			console.log('Hello ' + name + '. What do you do?');
		}
	}
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Ashley');
designerQuestion('Katie');
designerQuestion('Jenny');

interviewQuestion('teacher')('Molly'); //another way to do it
interviewQuestion('recruiter')('Nick');
interviewQuestion()('Jimmy'); //for the 'else' response
*/





////////////////////////////////////////////////////
// Lecture: IIFE (Immediately Invoked Function Expression)
/*
//a stupid game where if your random number is >= 5, you win:
function game() {
	var score = Math.random() * 10; //between 1 and 10
	console.log(score >= 5);
}
game();
*/
/*
//must be in () to be treated as an expression
(function () {
	var score = Math.random() * 10;
	console.log(score >= 5);
})(); //'();' invokes the nameless function above

//console.log(score);

//this stupid game subtracts a 'goodLuck' number to make winning harder? this game is real stupid
(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(10); //10 = goodLuck
//can only use this one time.
*/





///////////////////////////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge) {
	return function(yearOfBirth) {
		var a = ' years left until retirement.';
		var age = 2017 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}	
}

retirement(65)(1984); //age is 65 in Europe
retirement(66)(1996);

// setting the retirement age to be the same using a new name:
var retirementUS = retirement(66); //66 in USA
// now I don't have to enter the retirement age:
retirementUS(1986);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1984);
retirementIceland(1984);



// Challenge: rewrite interview problem.
// What I did:
function interview(job) {
	return function(name) {
		console.log(name + job);
	}
}

var interviewDesigner = interview(', can you please explain what UX design is?')
var interviewTeacher = interview(', what subject do you teach?');

interviewTeacher('Ashley');
interviewDesigner('Jenny');

// What he did:
function interviewQuestion(job) {
	return function(name) {
		if (job === 'designer') {
			console.log(name + ', can you please explain what UX design is?');
		} else if (job === 'teacher') {
			console.log('What subject do you teach, ' + name + '?');
		} else {
			console.log('Hello ' + name + '. What do you do?');
		}
	}	
}

interviewQuestion('teacher')('Molly');
*/





//////////////////////////////////////////////////
// Lecture: Bind, Call, and Apply

var jenny = {
	name: 'Jenny',
	age: 33,
	job: 'developer',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		} else if (style === 'friendly') {
			console.log('Hey, what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
};

jenny.presentation('formal', 'morning');

var katie = {
	name: 'Katie',
	age: 21,
	job: 'student'
};
// Method borrowing: still call the first one, but tell it to replace the 'this' with the second one:
jenny.presentation.call(katie, 'friendly', 'afternoon');

// won't work here but will need this idea later:
//jenny.presentation.apply(katie, ['friendly', 'afternoon']);

// setting the style to friendly (but not setting the timeOfDay at all):
var jennyFriendly = jenny.presentation.bind(jenny, 'friendly'); //bind returns a function

jennyFriendly('evening');
jennyFriendly('night');

// still have to use jenny after the = bc that's where the function is held above.
var katieFormal = jenny.presentation.bind(katie, 'formal');

katieFormal('afternoon');



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) { //(which array, which function)
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) { //loop through whatever array I told it to
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2017 - el;
}

function isFullAge(limit, el) { // adding in limit bc different countries define Full Age differently
	return el >= limit;
}

//using binding on a previous problem:
var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); //(ages array, isFullAge function(binding the full age to age 20))
console.log(ages);
console.log(fullJapan);








