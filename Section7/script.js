// Lecture: let and const
// const: things we don't want changed
// let: the new var

/*
// ES5
var name5 = 'Jenny McCargish';
var age5 = 33;
name5 = 'Jenny Smith';
console.log(name5);  // will print Jenny Smith

// ES6
const name6 = 'Jenny McCargish';
let age6 = 33; // ages change every year so it's a let
name6 = 'Jenny Smith';
console.log(name6);  // will print an error bc we can't change consts
*/


// ES5
/*
function driversLicense5(passedTest) {
	if (passedTest) {
		var firstName = 'John';
		var yearOfBirth = 1991;
	}

	console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}
driversLicense5(true); // this prints just fine


// ES6
function driversLicense6(passedTest) {
	let firstName;
	const yearOfBirth = 1990;

	if (passedTest) {
		firstName = 'John';
	}

	console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}
driversLicense6(true); // this will not print bc the console.log has to be within the if statement. Moving it into the if statement will make it work.
// OR to make it work I can actually define the const outside of the block and just declare the let.
*/



/*
// ES5
var i = 23;

for (var i = 0; i < 5; i++) {
	console.log(i); // prints 0-4
}
console.log(i); // prints 5



// ES6
let i = 23;

for (let i = 0; i < 5; i++) {
	console.log(i); // prints 0-5
}
console.log(i); // prints 23
*/





///////////////////////////////////////////////////////////////
// Lecture: Blocks and IIFEs (making variables private)
/*
// ES6
{
	const a = 1;
	let b = 2;
	var c = 3;
}

console.log(a + b); // this will not print bc it needs to be inside the function
console.log(c); // this will print bc with var it doesn't matter that it's declared inside the function


// ES5
(function() {
	var c = 3;
});

console.log(c); // won't print (old way of making things private)
*/




////////////////////////////////////////////////////////////////
// Lecture: Strings
/*
let firstName = 'Jenny';
let lastName = 'McCargish';
const yearOfBirth = 1984;
function calcAge(year) {
	return 2017 - year;
}


// ES5
console.log('This is ' + firstName + ' ' + lastName + '. She was born in ' + yearOfBirth + '. Today, she is ' + calcAge(yearOfBirth) + ' years old.');


// ES6
console.log(`This is ${firstName} ${lastName}. She was born in ${yearOfBirth}. Today, she is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // if it were a lowercase j, it would say false.
console.log(n.endsWith('h'));
console.log(n.includes('cC'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5)); // to add a space
*/




//////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
	return 2017 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2017- el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017- el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/




////////////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions 2
/*
// ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		var self = this; // this is a hack in order to be able to call on the color and position below bc this. wouldn't work
		document.querySelector('.green').addEventListener('click', function() {
			var str = 'This is box number ' + self.position + ' and it is ' + self.color;
			alert(str);
		});
	}
}
box5.clickMe();


// ES6
const box6 = {
	color: 'blue',
	position: 1,
	clickMe: function() {
		document.querySelector('.blue').addEventListener('click', () => {
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
}
box6.clickMe();




const box66 = {
	color: 'blue',
	position: 1,
	clickMe: () => { //using the arrow here will basically do the same thing as ES5, we can't use this. below. It is undefined.

		document.querySelector('.blue').addEventListener('click', () => {
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
}
box66.clickMe();
*/



/*
function Person(name) {
	this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {

	var arr = friends.map(function(el) {
		return this.name + ' is friends with ' + el;
	}.bind(this)); // .bind is another way to be able to use this. in a function within a function

	//console.log(arr);
}
 var friends = ['Shelly', 'Nick', 'Laura'];
 new Person('Jenny').myFriends5(friends);




// ES6
Person.prototype.myFriends6 = function(friends) {

	var arr = friends.map(el => `${this.name} is friends with ${el}`);

	console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/




////////////////////////////////////////////////////////////////////
// Lecture: Deconstructing
/*
// ES5
var jenny = ['Jenny', 33];
//var name = jenny[0];
//var age = jenny[1];


// ES6
const [name, age] = ['Jenny', 33];
console.log(name);
console.log(age);

const obj = {
	firstName: 'Jenny',
	lastName: 'McCargish'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);




function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}


const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/






/////////////////////////////////////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

// Changing the color of all the boxes to 'dodgerblue'

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
	cur.style.backgroundColor = 'dodgerblue';
});



// ES6

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');




// Loops

// ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {

	if(boxesArr5[i].className === 'box blue') {

		continue; // keep going if it's already blue (past the 2nd button)
	}

	boxesArr5[i].textContent = 'I changed to blue!';
}
*/



// ES6 (for off loop)
/*
const boxesArr6 = Array.from(boxes);

for (const cur of boxesArr6) {
	if (cur.className.includes('blue')) {
		continue;
	}
	cur.textContent = 'I changed to blue!';
}




// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
	return cur >= 18;
});
console.log(full); // true or false
console.log(full.indexOf(true)); // what index is above 18
console.log(ages[full.indexOf(true)]); // what is the age that is above 18


// ES6
console.log(ages.findIndex(cur => cur >= 18)); // what index is above 18
console.log(ages.find(cur => cur >= 18)); // what is the age that is above 18
*/





////////////////////////////////////////////////////////////////
// Lecture: Spread Operator
/*
function addFourAges (a, b, c, d) {
	return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);


// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


// ES6
const sum3 = addFourAges(...ages);  //same as sum2 above
console.log(sum3);


const familyMcCargish = ['Jenny', 'Jimmy', 'Katie'];
const familyBowser = ['Max', 'Alex', 'Kasey', 'Lew'];
//const bigFamily = [...familyMcCargish, ...familyBowser]; // putting them together
//console.log(bigFamily);
// can add a new element as well:
const bigFamily = [...familyMcCargish, 'Lucas', ...familyBowser];
console.log(bigFamily);



// Changing the wording in the boxes to purple
const h = document.querySelector('h1'); //don't need . when not calling on a class or id
const boxes2 = document.querySelectorAll('.box');
const all = [h, ...boxes2]; //don't need the ... for h bc its not qsALL

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/





////////////////////////////////////////////////////////////////////
// Lecture: Rest Parameters
/*
// ES5
function isFullAge5() {
	//console.log(arguments); //arguments can always be used to print whatever is put in (the years below)
	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function(cur) {
		console.log((2017 - cur) >= 18);
	});
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
function isFullAge6(...years) {
	years.forEach(cur => console.log((2017 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/



/*
// ES5
function isFullAge5(limit) {
	var argsArr = Array.prototype.slice.call(arguments, 1); //will start slicing at position 1 so that it count the limit(21) as a year
	console.log(argsArr);

	argsArr.forEach(function(cur) {
		console.log((2017 - cur) >= limit);
	});
}

//isFullAge5(21, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
function isFullAge6(limit, ...years) {
	years.forEach(cur => console.log((2017 - cur) >= limit));
}

isFullAge6(21, 1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/






///////////////////////////////////////////////////////////////////////
// Lecture: Default Parameters

// ES5
/*
function McCargishPerson(firstName, yearOfBirth, lastName, nationality) {
	// if lastName is undefined then lastName = McCargish, else lastName = whatever was entered.
	lastName === undefined ? lastName = 'McCargish' : lastName;
	nationality === undefined ? nationality = 'American' : nationality;

	this.firstName = firstName;
	this. yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
}

var jenny = new McCargishPerson('Jenny', 1984);
var katie = new McCargishPerson('Katie', 1996);
var amy = new McCargishPerson('Amy', 1970, 'Bowser');
*/



// ES6
/*
function McCargishPerson(firstName, yearOfBirth, lastName = 'McCargish', nationality = 'American') {

	this.firstName = firstName;
	this. yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
}

var jenny = new McCargishPerson('Jenny', 1984);
var katie = new McCargishPerson('Katie', 1996);
var amy = new McCargishPerson('Amy', 1970, 'Bowser');
*/






/////////////////////////////////////////////////////////////////
// Lecture: Maps

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong, please try again.');

console.log(question.get('question'));
console.log(question.get(1));
//console.log(question.size); //how many? (8)

if (question.has(4)) {
	//question.delete(4);
	//console.log('Answer 4 is here')
}
//OR
//question.delete(4);
//OR, to clear ALL:
//question.clear();

//prints all elements(loops through):
//question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));


for (let [key, value] of question.entries()) {
	if (typeof(key) === 'number') {
		console.log(`Answer ${key}: ${value}`);
	}
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
















