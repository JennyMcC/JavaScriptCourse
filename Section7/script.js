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














