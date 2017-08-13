/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/




///////////////////////////////////////
// Lecture: variables 2
/*
var name = 'Jenny';
var age = 33;

console.log(name + ' ' + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'developer';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried + '.');

age = 'thirty three';
job = 'manager';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried + '.');

//pop up box asking question and printing answer in console:
var lastName = prompt('What is the last name?');
console.log(lastName);
//pop up box with the sentence:
alert(name + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried + '.');
*/




//////////////////////////////////////////////
//Lecture: Operators
/*
var now = 2017;
var birthYear = now - 33;

birthYear = now - 33 * 2;
//2017 - 66
//1951

console.log(birthYear);

var ageOfJohn = 30;
var ageOfMark = 30;

//this is read right to left instead of left to right bc JS wat.
ageOfJohn = ageOfMark = (3 + 5) * 4 - 6;
//ageOfJohn = ageOfMark = 26
//ageOfJohn = 26

ageOfJohn++;
//same as: ageOfJohn = ageOfJohn + 1;

ageOfMark *= 2;
//same as: ageOfMark = ageOfMark * 2;

console.log(ageOfJohn);
console.log(ageOfMark);
*/




///////////////////////////////////////
//Lecture: if/else statements
/*
var name = 'John'
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
	console.log(name + ' is married!');
} else {
	console.log(name + ' doesn"t need that in his life.');
}
//same thing, with boolean:
isMarried = true;

if (isMarried) {
	console.log('YES!');
} else {
	console.log('NO!');
} 


if (isMarried) {
	console.log('YES!');
}
//2 equal signs will convert the number to a string. 3 equal signs will say 'no, this is false. they are not the same'
if (23 === "23") {
	console.log('Something to print...');
}
*/




///////////////////////////////////////
//Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20) {
	console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
	console.log('John is a young man.');
} else {
	console.log('John is a "man"');
}


var job = 'teacher';
//to change his job in a pop up:
job = prompt('What does John do?');

switch (job) {
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drives a cab.');
		break;
	case 'cop':
		console.log('John helps fight crime.');
		break;
	default:
		console.log('John does something else.');
}
*/




///////////////////////////////////////////
//Challenge 1:
/*
var jennyAge = 33;
var jennyHeight = 67;

var jimmyAge = 31;
var jimmyHeight = 69;

var katieAge = 21;
var katieHeight = 65;

jennyScore = jennyHeight + (jennyAge * 5);
jimmyScore = jimmyHeight + (jimmyAge * 5);
katieScore = katieHeight + (katieAge * 5);

if (jennyScore > jimmyScore && jennyScore > katieScore) {
	console.log('JENNY WINS! Score: Jenny: ' + jennyScore + ' Jimmy: ' + jimmyScore + ' Katie: ' + katieScore);
} else if (jimmyScore > jennyScore && jimmyScore > katieScore) {
	console.log('Jimmy wins! Score: Jimmy: ' + jimmyScore + ' Jenny: ' + jennyScore + ' Katie: ' + katieScore);
} else if (katieScore > jennyScore && katieScore > jimmyScore) {
	console.log('Katie wins! Score: Jenny: ' + jennyScore + ' Jimmy: ' + jimmyScore + ' Katie: ' + katieScore);
} else if (jennyScore === jimmyScore || jennyScore === katieScore || jimmyScore === katieScore) {
	console.log('It"s a tie! Score: Jenny: ' + jennyScore + ' Jimmy: ' + jimmyScore + ' Katie: ' + katieScore);
} else {
	console.log('I don"t know wtf happend.');
} */




////////////////////////////////////////////////
//Lecture: Functions
/*
function calculateAge(yearOfBirth) {
	var age = 2017 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageJenny = calculateAge(1984);
var ageMary = calculateAge(1948);
console.log(ageMary);

function yearsUntilRetirement(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement >= 0) {
	console.log(name + ' retires in ' + retirement + ' years.');
	} else {
		console.log(name + ' is already retired.');
	}
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Jenny', 1984);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/




//////////////////////////////////////////////////
//Lecture: Statements and Expressions
/*
function someFun(par) {
	//code
}

var someFun = function(par) {
	//code
}

//Expressions: produce an output/value
3 + 4;
var x = 3;

//Statements: performs an action but doesn't produce a value
if (x ===5) {
	//do something
} */




////////////////////////////////////////////////
//Lecture: Arrays
/*
var names = ['Jenny', 'Jimmy', 'Katie'];
var years = new Array(1984, 1986, 1996);

//can add OR replace names this way:
console.log(names[0]);
names[0] = 'Lora';
console.log(names);

var jenny = ['Jenny', 'McCargish', 1984, 'developer', 'false'];

//adds element to end of array:
jenny.push('green');
//adds element to beginning of array:
jenny.unshift('Ms.');
//removes element from the end:
jenny.pop();
//removes element from the beginning:
jenny.shift();
console.log(jenny);

//tells us where the element is in the array..[1](in a pop up box bc we did 'alert')
alert(jenny.indexOf('McCargish'));

//-1 is what gets returned if a value is NOT in the array. Sooo asking for -1 is asking if it is NOT in the array
if (jenny.indexOf('teacher') === -1) {
	console.log('Jenny is NOT a teacher.');
} */


 

/////////////////////////////////////////////////////////
//Lecture: Objects
/*
var jenny = {
	name: 'Jenny',
	lastName: 'McCargish',
	yearOfBirth: 1984,
	job: 'developer',
	isMarried: false
};
console.log(jenny);
console.log(jenny.lastName);
console.log(jenny['lastName']);

var xyz = 'job';
console.log(jenny[xyz]);

//Data mutation; replacing stuff:
jenny.lastName = 'Smith';
jenny['job'] = 'teacher';

console.log(jenny);

//filling a new one in a different way:
var katie = new Object();
katie.name = 'Katie';
katie.lastName = 'McCargish';
katie['yearOfBirth'] = 1996;
katie['job'] = 'interior designer';
katie['isMarried'] = false;
console.log(katie);
*/




/////////////////////////////////////////
//Lecture: Objects  Methods

/* version 1:
//objects can also hold arrays and functions in them:
var jenny = {
	name: 'Jenny',
	lastName: 'McCargish',
	yearOfBirth: 1984,
	job: 'developer',
	isMarried: false,
	family: ['Lora', 'Jim', 'Jimmy', 'Katie'],
	calculateAge: function() {
		return 2017 - this.yearOfBirth;
	} 
};
//can print whole thing or just certain elements:
console.log(jenny);
console.log(jenny.family);
console.log(jenny.family[3]);
//can call on functions and change the year that I pass in if I want:
//works when "function(yearOfBirth)" and there is no 'this.'
console.log(jenny.calculateAge(1984));
//changed calculateAge function to say this.year.. 
//so I didn't have to enter my year when it is already in the object
//however, now I cannot enter a different year.
console.log(jenny.calculateAge());
//adding age to object:
var age = jenny.calculateAge();
jenny.age = age;

console.log(jenny);
*/

//version 2:
/*
var jenny = {
	name: 'Jenny',
	lastName: 'McCargish',
	yearOfBirth: 1984,
	job: 'developer',
	isMarried: false,
	family: ['Lora', 'Jim', 'Jimmy', 'Katie'],
	calculateAge: function() {
		this.age = 2017 - this.yearOfBirth;
	} 
};

jenny.calculateAge();
console.log(jenny);

var jimmy = {
	name: 'Jimmy',
	lastName: 'McCargish',
	yearOfBirth: 1986,
	job: 'health educator',
	isMarried: true,
	family: ['Lora', 'Jim', 'Jenny', 'Katie'],
	calculateAge: function() {
		this.age = 2017 - this.yearOfBirth;
	} 
};

jimmy.calculateAge();
console.log(jimmy); */




//////////////////////////////////////////
//Lecture: Loops and Iteration
/*
for (var i = 0; i < 10; i++) {
	console.log(i);
}

var names = ['Jim', 'Lora', 'Jenny', 'Jimmy', 'Katie'];

for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for (var i = names.length -1; i > -1; i--) {
	console.log(names[i]);
} 

var names = ['Jim', 'Lora', 'Jenny', 'Jimmy', 'Katie'];

var i = 0;
while(i < names.length) {
	console.log(names[i]);
	i++;
}

for(var i = 1; i < 6; i++) {
	console.log(i);
//to make it stop at a certain point:
	if(i === 3) {
		break;
	}
}

for(var i = 1; i < 6; i++) {
	//this will skip 3:
	if(i === 3) {
		continue;
	}
	console.log(i);
} */




////////////////////////////////////////////
//Challenge 2:

var years = [1984, 1986, 1996, 2001];
var ages = [];

for (var i = 0; i < years.length; i++) {
	ages[i] = 2017 - years[i];
}

for (var i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is technically an adult.');
	} else {
		console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is not technically an adult.');
	}
}

function printFullAge(years) {
	var ages = [];
	var fullAges = [];

	for (var i = 0; i < years.length; i++) {
		ages[i] = 2017 - years[i];
	}
	for (var i = 0; i < ages.length; i++) {
		if (ages[i] >= 18) {
			console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is technically an adult.');
			fullAges.push(true);
		} else {
			console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is not technically an adult.');
			fullAges.push(false);
		}
	}

	return fullAges;
} 

var years = [1984, 1986, 1996, 2001];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);







