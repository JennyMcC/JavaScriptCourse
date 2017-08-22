// Challenge 4: Questions Game

var Question = function(questionAsked, options, correctAnswer) {
	this.questionAsked = questionAsked;
	this.options = options;
	this.correctAnswer = correctAnswer;
}

var questionOne = new Question('Who is the creator of this game?', '1.Your Mom  2.Jenny  3.Stephen Hawking, obviously', 2);
var questionTwo = new Question('How many siblings does Jenny have?', '1.Two  2.Zero  3.Four', 1);
var questionThree = new Question('Where did Jenny go to college?', '1.University of Miami  2.Harvard  3.Miami University', 3);

/*
var myQuestions = [];
myQuestions.push(questionOne);
myQuestions.push(questionTwo);
myQuestions.push(questionThree);
*/

var whichQuestion = Math.floor(Math.random() * 3) + 1;
		if (whichQuestion === 1) {
			console.log(questionOne.questionAsked);
			console.log(questionOne.options);
		} else if (whichQuestion === 2) {
			console.log(questionTwo.questionAsked);
			console.log(questionTwo.options);
		} else if (whichQuestion === 3) {
			console.log(questionThree.questionAsked);
			console.log(questionThree.options);
		}
	
var enterAnswer = prompt('Enter the number of the correct answer:');
	//for (var i = 0; i <= myQuestions.length; i++) {
		if (enterAnswer === this.correctAnswer) {
			console.log('Correct!');
		} else if (enterAnswer !== this.correctAnswer) {
			console.log('You know nothing.');
		}
	//}


