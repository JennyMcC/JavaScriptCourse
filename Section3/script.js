///////////////////////////////////////
// Lecture: Hoisting
/*
//functions
calculateAge(1965);
//for this type of function, we can call it above and it will still work:
function calculateAge(year) {
    console.log(2017-year);
}
 
//retirement(1984);
//for this type(variable declaration), we can only call it AFTER it is typed:
var retirement = function(year) {
    console.log(65 - (2017-year));
}

retirement(1990);

//variables
var age = 23;
console.log(age);

function foo() {
    console.log(age); //will print undefined bc we haven't declared it in this function yet
    var age = 65;
    console.log(age);
}
foo(); //will print 65 bc it's declared IN THE FUNCTION
console.log(age); //will print 23 bc we are not calling the function
*/




///////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example: works bc we call the next function within the first function and so on.
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    
        function third() {
            var d = 'John!';
            console.log(a + b + c + d);
            fourth();

            function fourth() {
                var e = 'Jenny!';
                console.log(a + b + c + d + e);
            }
        } 
    } 
}
/*
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/




///////////////////////////////////////
// Lecture: The this keyword
/*
calculateAge(1986);

function calculateAge(year) {
    console.log(2017- year);
    console.log(this);
} */

var jenny = {
    name: 'Jenny',
    yearOfBirth: 1984,
    calculateAge: function() {
        console.log(this);
        console.log(2017 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
};

jenny.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1980
};
//to "borrow" the calculateAge function for mike:
//now I don't have to rewrite it :D
mike.calculateAge = jenny.calculateAge;
mike.calculateAge();



