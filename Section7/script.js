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





//////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions

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





////////////////////////////////////////////////////////////////////////
// Lecture: Arrow Functions 2

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
//box66.clickMe();





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
















